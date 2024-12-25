"use client";

import React from 'react'
import styled from "styled-components";
import Link from "next/link";

const Cards = () => {
  return (
    <Card>
      <Card1>
        <CardTextP>Low Price</CardTextP>
        <CardHeadH3>High Coziness</CardHeadH3>
        <OfferP>UPTO 50% OFF</OfferP>
        <ExploreLink href="/">Explore Items</ExploreLink>
      </Card1>
      <Card2>
        <CardTextP>Beyoung Presents</CardTextP>
        <CardHeadH3>
          Breezy Summer <br />
          Style
        </CardHeadH3>
        <OfferP>UPTO 50% OFF</OfferP>
        <ExploreLink href="/">Explore Items</ExploreLink>
      </Card2>
    </Card>
  )
}

const Card = styled.section`
  padding: 3% 7%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom:40px;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
const Card1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 50%;
  height: 300px;
  overflow: hidden;
  background-image: url(/cards/bg-2.jpg);
  background-size: 150% 200%;
  background-position: top left;
  border-radius: 5px;
  padding: 0 4%;
  box-shadow: 1px 1px 10px gray;
  color: white;
  @media (max-width: 900px) {
    width: 60%;
  }
  @media (max-width: 800px) {
    width: 75%;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;
const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 50%;
  height: 300px;
  background-size: 150% 180%;
  background-position: top left;
  background-image: url(/cards/bg-3.jpg);
  border-radius: 5px;
  padding: 0 4%;
  box-shadow: 1px 1px 10px gray;
  color: white;
  @media (max-width: 900px) {
    width: 60%;
  }
  @media (max-width: 800px) {
    width: 75%;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;
const CardTextP = styled.p`
  padding-bottom: 1.3rem;
`;
const CardHeadH3 = styled.h3`
  font-size: 1.8rem;
  padding-bottom: 0.4rem;
`;
const OfferP = styled.p`
  padding-bottom: 1.3rem;
`;
const ExploreLink = styled(Link)`
  color: white;
`;

export default Cards