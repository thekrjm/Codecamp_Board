import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface BoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => Promise<void>;
  onClickUpdate: () => Promise<void>;
  contents: string;
  writer: string;
  password: string;
  star: number;
  isEdit?: boolean;
  el?: IBoardComment;
  setStar: Dispatch<SetStateAction<number>>;
}

export interface IBoardCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IBoardComment;
}
