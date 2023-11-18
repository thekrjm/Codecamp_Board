import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { IMutation, IMutationCreateBoardArgs } from "../../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  //const [createBoard] = useMutation<결과타입, 변수타입>(CREATE_BOARD);
  const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);
  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        writer: "든든",
        title: "잉?",
        contents: "내용 없음",
      },
    });
    console.log(result);
    alert(result.data?.createBoard?.message);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}
