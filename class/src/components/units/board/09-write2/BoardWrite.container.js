import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.query";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD)

  const router = useRouter();

  const onClickSubmit = async (e) => {
    const result = await createBoard({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
    router.push(`/section09/09-04-boards/${result.data.createBoard.number}`)
  };

  const onClickUpdate = async () => {

    const myvariables = { number: Number(router.query.number) }
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
    router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`)
  }


  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
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
