import { collection, getDocs, addDoc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../commons/libraries/firebase";
import { ChangeEvent, useState } from "react";

export default function FirebaseWrite() {
  const [infoInputs, setInfoInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  const onClickSubmit = (): void => {
    const fireBoard = collection(getFirestore(firebaseApp), "fireBoard");
    addDoc(fireBoard, { ...infoInputs });
  };

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
    setInfoInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <>
      <input type="text" id="writer" onChange={onChangeInputs} />
      <input type="text" id="title" onChange={onChangeInputs} />
      <input type="text" id="contents" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>작성하기</button>
    </>
  );
}
