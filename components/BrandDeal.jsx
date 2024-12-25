'use client';

import styled from "styled-components";

function BrandDeal() {
  return (
    <Container>
      <Headh1>Top Brands Deals</Headh1>
      <ParaText>
        Up To <SpanTag>60%</SpanTag> off on brands{" "}
      </ParaText>
      <BrandImgDiv>
        <BrandImg src="/brand/nike.jpg" />
        <BrandImg src="/brand/image 18.png" />
        <BrandImg src="/brand/levis.jpg" />
        <BrandImg src="/brand/USPA.jpg" />
        <BrandImg src="/brand/puma.jpg" />
      </BrandImgDiv>
    </Container>
  );
}

export default BrandDeal;

const Container = styled.div`
  padding: 5% 10%;
  margin: 3% 7%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align:center;
  background: #3c4242;
  border-radius: 10px;
  @media (max-width: 700px) {
    padding: 5% 0%;
  }
`;
const Headh1 = styled.h1`
  padding-bottom: 1%;
  color: white;
  @media(max-width:400px){
  font-size:1.5rem;
  }
`;
const ParaText = styled.p`
  padding-bottom: 2%;
  color: white;
  @media(max-width:400px){
  font-size:.9rem;
  }
`;
const SpanTag = styled.span`
  color: yellow;
`;
const BrandImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 800px) {
  justify-content: center;
    flex-wrap: wrap;
    width: 80%;
  }
`;
const BrandImg = styled.img`
  background: #fff;
  width: 110vw;
  height: 5vh;
  margin: 0 3%;
  padding: 1%;
  border-radius: 5px;
  @media (max-width: 800px) {
    margin: 1%;
    width:20vw;
  }
  @media (max-width: 500px) {
    width: 20vw;
  }
  @media(max-width:400px){
    width: 18vw;
  height: 7vh;
  }
`;