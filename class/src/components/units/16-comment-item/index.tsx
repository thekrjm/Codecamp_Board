import { useState } from "react";

export default function CommentItem(props: any): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit ? (
        <div>
          <div>작성자:{props.el.writer}</div>
          <div>제목:{props.el.title}</div>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        <input type="text" />
      )}
    </div>
  );
}
