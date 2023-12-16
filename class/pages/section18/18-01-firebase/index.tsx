import { collection, getDocs, addDoc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "src/commons/libraries/firebase";

export default function FirebaseStore(): JSX.Element {
  const onClickSubmit = (): void => {
    const board = collection(getFirestore(firebaseApp), "board");

    addDoc(board, {
      writer: "누구",
      title: "제목이고",
      contents: "내용이다.",
    });
  };

  const onClickFetch = async (): Promise<void> => {
    const board = collection(getFirestore(firebaseApp), "board");

    const result = await getDocs(board);
    const datas = result.docs.map((el) => el.data());
    console.log(datas);
  };
  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}
