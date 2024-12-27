"use client";

import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";

const Spotlight = () => {
  const items = [
    {
      src: "/spotlight/bg-1.jpg",
      heading: "T-shirt / Tops",
      mainHead: "Summer Value Pack",
      para: "cool  / comfy",
      button: "Shop Now",
    },
    {
      src: "/spotlight/bg-2.jpg",
      heading: "T-shirt / Tops",
      mainHead: "Summer Value Pack",
      para: "cool / colorful ",
      button: "Shop Now",
    },
    {
      src: "/spotlight/bg-3.jpg",
      heading: "T-shirt / Tops",
      mainHead: "Summer Value Pack",
      para: "colorful / comfy",
      button: "Shop Now",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    appendDots: (dots) => (
      <DotsWrapper>
        <ul>{dots}</ul>
      </DotsWrapper>
    ),
    customPaging: (i) => (
      <CustomDot>
        <div className="dot"></div>
      </CustomDot>
    ),
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <SlideContainer key={index}>
          <SlideEffect style={{ backgroundImage: `url(${item.src})` }}>
            <SlideText>
              <Slideh5>{item.heading}</Slideh5>
              <Slideh1>{item.mainHead}</Slideh1>
              <Slidep>{item.para}</Slidep>
              <Slidebutton>{item.button}</Slidebutton>
            </SlideText>
          </SlideEffect>
        </SlideContainer>
      ))}
    </Slider>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{
        ...style,
        right: "20px",
        zIndex: 10,
        display: "block",
        fontSize: "20px",
      }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{
        ...style,
        left: "20px",
        zIndex: 10,
        display: "block",
        fontSize: "20px",
      }}
      onClick={onClick}
    />
  );
};
const CustomDot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 5px;
  background-color: #e0e0e0;
  border-radius: 5px;
  transition: all 0.3s ease;

  .dot {
    width: 100%;
    height: 100%;
    background-color: #000;
    transform: scaleX(0);
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  &.slick-active .dot {
    transform: scaleX(1);
  }
`;

const DotsWrapper = styled.div`
  margin-top: 20px;
  bottom:10px;

  ul {
    display: flex !important;
    justify-content: center;
    gap: 10px;
  }

  li {
    margin: 0;
  }
`;

const Arrow = styled.div`
  &::before {
    color: #fff;
    font-size: 2rem;
  }
`;

const SlideContainer = styled.div`
  width: 100%;
  height: 560px;
`;

const SlideEffect = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
`;

const SlideText = styled.div`
  line-height: 4rem;
  margin: 3%;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-radius: 5px;
`;

const Slideh5 = styled.h5`
  color: white;
  @media (max-width: 800px) {
    width: fit-content;
    background: rgba(178, 178, 178, 0.5);
    padding-left: 10px;
    margin-bottom: 10px;
    border-radius: 30px;
    padding-right: 10px;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

const Slideh1 = styled.h1`
  color: white;
  @media (max-width: 800px) {
    background: rgba(178, 178, 178, 0.5);
    width: fit-content;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 30px;
    margin-bottom: 10px;
  }
  @media (max-width: 500px) {
    font-size: 2.2rem;
  }
    @media (max-width: 380px) {
    font-size: 1.8rem;
  }
`;

const Slidep = styled.p`
  font-weight: 500;
  @media (max-width: 800px) {
    width: fit-content;
    background: rgba(178, 178, 178, 0.5);
    padding-left: 10px;
    margin-bottom: 10px;
    padding-right: 10px;
    border-radius: 30px;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

const Slidebutton = styled.button`
  background-color: #fff;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 3% 5%;
  border: none;
  width: 50%;
  @media (max-width: 400px) {
    font-size: 0.8rem;
    font-weight: 600;
    padding: 3% 4%;
    width: 40%;
  }
`;

export default Spotlight;
