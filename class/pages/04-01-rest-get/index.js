import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  const [title, setTitle] = useState("");

  const onClickAsync = () => {
    const data = axios.get("http://koreanjson.com/posts/1");
    console.log(data);
  };

  const onClickSync = async () => {
    const data = await axios.get("http://koreanjson.com/posts/1");
    console.log(data);
    console.log(data.data);
    const result = data.data.title;
    setTitle(result);
  };
  return (
    <>
      <button onClick={onClickSync}>Rest-API(동기) 요청하기</button>
      <button onClick={onClickAsync}>Rest-API(비동기) 요청하기</button>
      <div>{title}</div>
    </>
  );
}
