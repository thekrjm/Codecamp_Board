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

export default function StaticRoutedPage(props) {
  const router = useRouter();
  console.log(router);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  const onClickMove = () => {
    router.push(`/section09/09-03-boards/${router.query.number}/edit`)
  }
  return (
    <div>
      <div>{router.query.number}번 게시글로 이동 완료되었습니다.</div>
      <div>작성자:{data?.fetchBoard?.writer}</div>
      <div>제목:{data?.fetchBoard?.title}</div>
      <div>내용:{data?.fetchBoard?.content}</div>
      <button onClick={onClickMove} >수정하기</button>
    </div>
  );
}
