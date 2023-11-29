import { useRouter } from "next/router";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 152px;
  background-color: #f5f2fc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const InnerLogo = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: #5729ff;
  cursor: pointer;
`;

export const InnerButton = styled.span`
  margin: 10px;
  color: #5729ff;
  cursor: pointer;
`;

export default function LayoutHeader() {
  const router = useRouter();

  const onClickLogo = () => {
    void router.push("/boards");
  };

  const onClickMoveToLogin = () => {
    void router.push("/login");
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={onClickLogo}>💎 LIVE</InnerLogo>
        <div>
          <InnerButton onClick={onClickMoveToLogin}>로그인</InnerButton>
          <InnerButton>회원가입</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
