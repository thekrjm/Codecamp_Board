import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  background-color: red;
  height: 400px;
`;

const SliderItem = styled.img`
  height: 350px;
  margin: auto;
`;

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/images/layout/banner01.png" />
        </div>
        <div>
          <SliderItem src="/images/layout/banner02.jpg" />
        </div>
        <div>
          <SliderItem src="/images/layout/banner03.jpg" />
        </div>
        <div>
          <SliderItem src="/images/layout/banner04.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
