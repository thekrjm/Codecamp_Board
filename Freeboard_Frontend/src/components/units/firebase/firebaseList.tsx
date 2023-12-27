import { collection, getDocs, getFirestore } from "firebase/firestore";
import type { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseApp } from "../../../commons/libraries/firebase";
import { useRouter } from "next/router";

export default function FirebaseList(): JSX.Element {
  const router = useRouter();
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchBoards = async (): Promise<void> => {
      const fireBoard = collection(getFirestore(firebaseApp), "fireBoard");
      const querySnapshot = await getDocs(fireBoard);
      const boardList = querySnapshot.docs.map((el) => el.data());
      setDataBoards(boardList);
      console.log(boardList);
    };
    void fetchBoards();
  }, []);

  console.log(dataBoards);

  const onClickMoveToWrite = (): void => {
    router.push("/firebase/new");
  };
  return (
    <>
      <div>작성중</div>
      <button onClick={onClickMoveToWrite}>글 작성</button>
      {dataBoards.map((el, index) => (
        <div key={index + 1}>
          <div>{el.writer}</div>
          <div>{el.title}</div>
          <div>{el.contents}</div>
        </div>
      ))}
    </>
  );
}
