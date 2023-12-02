import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "src/commons/types/generated/types";
import CommentItem from "src/components/units/16-comment-item";

const FETCH_BOARD = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARD,
  );

  return (
    <div>
      {data?.fetchBoards?.map((el) => <CommentItem key={el._id} el={el} />)}
    </div>
  );
}
