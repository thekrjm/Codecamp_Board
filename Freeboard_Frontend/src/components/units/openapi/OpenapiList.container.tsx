import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ImgWrapper = styled.div``;

const ImgItem = styled.img`
  width: 300px;
  height: 300px;
  overflow: hidden;
  flex-wrap: wrap;
  flex: 3;
  flex-direction: row;
`;

export default function OpenapiList(): JSX.Element {
  const [imgItem, setImgItam] = useState<string[]>([]);

  useEffect(() => {
    const getImg = async () => {
      new Array(9).fill(1).forEach(async (_) => {
        const result = await axios("https://dog.ceo/api/breeds/image/random");
        setImgItam((prev) => [...prev, result.data.message]);
      });
    };
    void getImg();
    console.log("실행중");
  }, []);

  return (
    <Wrapper>
      {imgItem.map((el, index) => (
        <ImgWrapper key={index}>
          <ImgItem src={el} />
        </ImgWrapper>
      ))}
    </Wrapper>
  );
}
