import { gql, useMutation } from "@apollo/client";
import { useState, type ChangeEvent, useRef } from "react";
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

  return (
    <>
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
    </>
  );
}
