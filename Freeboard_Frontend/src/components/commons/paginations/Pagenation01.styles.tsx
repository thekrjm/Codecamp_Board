import styled from "@emotion/styled";

export const PageItem = styled.div`
  font-size: 16px;
  margin: 0 10px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationButton = styled.button`
  margin: 10px 10px;
  background-color: #ffffff;
  height: 35px;
  border: 1px solid lightgray;
  border-radius: 10px;
  cursor: pointer;
`;

interface IPageProps {
  isActive: boolean;
}
export const Page = styled.div`
  font-size: 16px;
  margin: 0 10px;
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "700" : "500")};
  border-bottom: ${(props: IPageProps) =>
    props.isActive ? "1px solid lightgray" : "none"};
`;
