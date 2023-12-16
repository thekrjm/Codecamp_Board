import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    const result = await createBoard({
      variables: {
        ...inputs,
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <>
      작성자:
      <input type="text" id="writer" onChange={onChangeInputs} />
      <br />
      제목:
      <input type="text" id="title" onChange={onChangeInputs} />
      <br />
      내용:
      <input type="text" id="contents" onChange={onChangeInputs} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}
