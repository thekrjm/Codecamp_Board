import BoardWriteUI from "@/src/components/units/board/09-write/BoardWrite.presenter";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

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
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });


  return <BoardWriteUI isEdit={true} data={data} />;
}