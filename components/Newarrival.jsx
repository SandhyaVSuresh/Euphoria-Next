"use client";
import styled from "styled-components";
import Slider from "react-slick";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function NewArrival() {

  const [newArrivalItems, setnewArrivalItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const fetchNewArrival = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setnewArrivalItems(response.data);
        setLoading(false);
      } catch {
        console.log("error:", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };
    fetchNewArrival();
  }, []);

  const handleCardClick = (Id) => {
    // console.log(Id);
    if(localStorage.getItem("token")!==null){
      return router.push(`/product/${Id}`)
    }else{
      return alert("Please Login To Purchase or View")
    }
    // router.push(`/product/${Id}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!newArrivalItems || !Array.isArray(newArrivalItems))
    return <p>No products available.</p>;

  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    autoplay: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <NewHeadDiv>
        <SideLineDiv></SideLineDiv>
        <NewTitleH2>New Arrival</NewTitleH2>
      </NewHeadDiv>
      <NewBodyDiv>
      <div className="slider-container">
        <Slider {...settings}>
          {newArrivalItems.map((item) => (
            <NewCardDiv key={item.id} onClick={() => handleCardClick(item.id)}>
              <ImageDiv>
                <CardImg src={item.image} alt={item.title} />
              </ImageDiv>
              <CardTitleH3>{item.title}</CardTitleH3>
            </NewCardDiv>
          ))}
        </Slider>
      </div>
      </NewBodyDiv>
    </Container>
  );
}
const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <Arrow
        className={className}
        style={{
          ...style,
          right: "0",
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
          left: "0",
          zIndex: 10,
          display: "block",
          fontSize: "20px",
        }}
        onClick={onClick}
      />
    );
  };
  
const Arrow = styled.div`
&::before {
  color: #000;
  font-size: 2rem;
}
`;
const Container = styled.div`
  padding: 1% 7%;
  height: fit-content;
  margin-bottom: 2rem;
  @media (max-width: 700px) {
    height: fit-content;
  }
  @media (max-width: 400px) {
    height:  fit-content;
  }
`;

const NewHeadDiv = styled.div`
  padding-bottom: 2%;
  display: flex;
  align-items: center;
`;

const SideLineDiv = styled.div`
  border-radius: 5px;
  background: rgba(138, 51, 253, 1);
  width: 5px;
  height: 35px;
`;

const NewTitleH2 = styled.h2`
  padding-left: 10px;
  color: rgba(60, 66, 66, 1);
`;

const NewCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 3rem;
  text-align: center;
 width:fit-content;
  height: 400px;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 700px) {
    height: 400px;
  }
    @media (max-width: 460px) {
    margin:5% 24%;
    width:300px;
  }
  @media (max-width: 400px) {
    height: 450px;
  }
    @media (max-width: 330px) {
    margin:5% 20%;
    width:300px;
  }
`;
const NewBodyDiv = styled.div`

`;
const ImageDiv = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardImg = styled.img`
  width: 90%;
  height: fit-content;
  @media (max-width: 700px) {
    
  height: fit-content;
    width: 80%;
  }
  @media (max-width: 400px) {
    width: 100%;
  height: fit-content;
  }
  @media (max-width: 350px) {
    width: 100%;
  height: fit-content;
  }
`;

const CardTitleH3 = styled.h3`
  margin-top: 1.5rem;
  color: rgba(60, 66, 66, 1);
  font-weight: 500;
  font-size: 1rem;
  width:200px;
`;
export default NewArrival;
