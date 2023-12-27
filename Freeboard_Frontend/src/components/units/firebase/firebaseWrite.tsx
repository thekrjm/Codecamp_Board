import { collection, addDoc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../commons/libraries/firebase";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

export default function FirebaseWrite() {
  const router = useRouter();

  const [infoInputs, setInfoInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  const onClickSubmit = (): void => {
    const fireBoard = collection(getFirestore(firebaseApp), "fireBoard");
    addDoc(fireBoard, { ...infoInputs });
    router.push("/firebase");
  };

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
    setInfoInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <div style={{ display: "flex" }}>
      작성자: <input type="text" id="writer" onChange={onChangeInputs} />
      제목: <input type="text" id="title" onChange={onChangeInputs} />
      내용: <input type="text" id="contents" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>작성하기</button>
    </div>
  );
}
