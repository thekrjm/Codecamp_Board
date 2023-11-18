import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "../../../../../src/components/units/board/10-write/BoardWrite.presenter";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function GraphqlMutationPage() {

  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) }
  });

  return (
    <div>
      <div>################여기는 페이지입니다.###########</div>
      <BoardWriteUI isEdit={true} data={data} />
      <div>################여기는 페이지입니다.###########</div>
    </div>
  );
}