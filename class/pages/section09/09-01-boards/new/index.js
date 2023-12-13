import BoardWrite from "@/src/components/units/board/08-write/BoardWrite.container";
import BoardWriteUI from "@/src/components/units/board/09-write/BoardWrite.presenter";

export default function GraphqlMutationPage() {
  return <BoardWriteUI isEdit={false} />;
}
