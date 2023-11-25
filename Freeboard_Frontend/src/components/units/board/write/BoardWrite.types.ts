import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  isActive: boolean;
  isOpen: boolean;
  data: any;
  isEdit: boolean;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  zipcode: string;
  address: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressComplete: (data: any) => void;
  onChangeAddressSearch: () => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface IUpdateBoardInputValue {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    address?: string;
    addressDetail?: string;
    zipcode?: string;
  };
}

export interface IButtonColor {
  isActive: boolean;
}
