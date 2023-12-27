import { gql, useMutation } from "@apollo/client";
import type { ChangeEvent, MouseEvent } from "react";
import { useState, useRef } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0];
    console.log(file);
    const result = await uploadFile({ variables: { file } });
    console.log("result만", result);

    console.log(result.data?.uploadFile.url);
    setImageUrl(result.data?.uploadFile.url ?? "오류");
  };

  const onClickImage = (): void => {
    fileRef.current?.click();
  };

  ///////////////////////////////////////////////////

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
        createBoardInput: {
          writer: inputs.writer,
          password: "123",
          title: inputs.title,
          contents: inputs.contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
    console.log(event);

    alert(result.data.createBoard.message);
  };

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };
  /////////////////////////////////////////

  return (
    <>
      작성자:
      <input type="text" onChange={onChangeInputs} id="writer" />
      <br />
      제목:
      <input type="text" onChange={onChangeInputs} id="title" />
      <br />
      내용:
      <input type="text" onChange={onChangeInputs} id="contents" />
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "skyblue" }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        multiple={true}
        onChange={onChangeFile}
        ref={fileRef}
      />
      <img src={`https://storage/googleapis.com/${imageUrl}`} />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}
