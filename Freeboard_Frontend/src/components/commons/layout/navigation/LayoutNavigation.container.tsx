import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const Wrapper = styled.div`
  height: 90px;
  background-color: #fff933;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MenuWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const MenuItem = styled.div`
  margin: 0px 60px;
  font-size: 20px;
  cursor: pointer;
  :hover {
    font-weight: bolder;
  }
`;

const NAVIGATION_MENU = [
  { name: "외부사진", page: "/openapi" },
  { name: "나눔합니다", page: "/share" },
  { name: "중고마켓", page: "/boards" },
  { name: "마이페이지", page: "/mypage" },
];

export default function LayoutNavigation() {
  const router = useRouter();
  const onClickPage = (event: MouseEvent<HTMLDivElement>) => {
    router.push(event.currentTarget.id);
  };

  return (
    <Wrapper>
      {NAVIGATION_MENU.map((el) => (
        <MenuWrapper key={el.page}>
          <MenuItem id={el.page} onClick={onClickPage}>
            {el.name}
          </MenuItem>
        </MenuWrapper>
      ))}
    </Wrapper>
  );
}
