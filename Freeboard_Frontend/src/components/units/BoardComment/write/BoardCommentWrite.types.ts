import { ChangeEvent } from "react";

export interface BoardCommentWriteUIProps {
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onClickSubmit: () => void
    contents: string
}