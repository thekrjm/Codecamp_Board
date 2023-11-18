import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.query";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyvariables } from "./BoardWrite.types";



export default function BoardWrite(props: IBoardWriteProps) {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD)

  const router = useRouter();

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
    router.push(`/section10/10-02-typescript-boards/${result.data.createBoard.number}`)
  };
  const onClickUpdate = async () => {

    const myvariables: IMyvariables = { number: Number(router.query.number) }
    if (writer) myvariables.writer = writer
    if (title) myvariables.title = title
    if (contents) myvariables.contents = contents

    const result = await updateBoard({
      // variables: { 수정 하지 않은 부분이 mutation되어 빈문자열로 가기 때문에 사용 불가
      //   number: Number(router.query.number),
      //   writer: writer,
      //   title: title,
      //   contents: contents
      // }

      variables: myvariables
    })
    router.push(`/section10/10-02-typescript-boards/${result.data.updateBoard.number}`)
  }


  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value); //onChange에 대한 react에서 제공하는 interface
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  return (
    <BoardWriteUI
      onClickUpdate={onClickUpdate}
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
