import { ChangeEvent, useState } from "react";
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { IBoardWriteProps, IUpdataBoardInputValue } from "./BoardWrite.types";
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs } from "../../../../commons/types/generated/types";

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD)
  const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(UPDATE_BOARD);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("")
    }

    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("")
    }

    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("")
    }

    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("")
    }

    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents
            }
          }
        })
        console.log(result.data?.createBoard._id)
        router.push(`/boards/${result.data?.createBoard._id}`)
      } catch (error: any) {
        alert(error.message)
      }
    }
  };



  const onClickUpdate = async () => {
    //writer는 백엔드에서 수정 못하게 설정되어있으므로 readonly, disabled를 사용해서 비활성화 시켜야함

    if (!title && !contents) {
      alert("수정된 내용이 없습니다.")
      return //수정된 내용이 없으므로 아래 함수가 실행되지 않도록 return으로 이벤트 종료
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return
    }

    const updateBoardInputValue: IUpdataBoardInputValue = {};
    if (title) updateBoardInputValue.title = title;
    if (contents) updateBoardInputValue.contents = contents;
    if (router.query.boardId !== "string") return;
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: password,
          updateBoardInput: updateBoardInputValue
        },
      })
      router.push(`/boards/${result.data?.updateBoard._id}`)
      console.log(result);
    } catch (error) {
      if (error instanceof Error) console.log(error);

    }
  };

  return (
    <BoardWriteUI
      isActive={isActive}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  )
}