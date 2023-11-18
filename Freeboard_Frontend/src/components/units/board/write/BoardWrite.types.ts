import { ChangeEvent, MouseEvent } from "react"
import { IQuery } from "../../../../commons/types/generated/types"

export interface IBoardWriteProps {
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
}

export interface IBoardWriteUIProps {
    isActive: boolean
    data: any
    isEdit: boolean
    writerError: string
    passwordError: string
    titleError: string
    contentsError: string
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void
    onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
}

export interface IUpdataBoardInputValue {
    title?: string
    contents?: string
}

export interface IButtonColor {
    isActive: boolean
}