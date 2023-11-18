
import BoardCommentList from "../../../src/components/units/BoardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/BoardComment/write/BoardCommentWrite.container";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";


export default function BoardDetailPage() {

  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  )
}
