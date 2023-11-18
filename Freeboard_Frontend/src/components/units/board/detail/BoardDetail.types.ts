import { IQuery } from "../../../../commons/types/generated/types"

export interface IBoardDetailUI {
    data?: Pick<IQuery, "fetchBoard">
    onClickMoveToBoardList: () => void
    onClickMoveToBoardEdit: () => void
}