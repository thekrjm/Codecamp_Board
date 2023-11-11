import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onChangeEmail(e) {
    console.log(e);
  }

  return (
    <>
      이메일: <input type="text" />
      비밀번호: <input type="password" />
      <button onClick={onChangeEmail}>회원가입</button>
    </>
  );
}
