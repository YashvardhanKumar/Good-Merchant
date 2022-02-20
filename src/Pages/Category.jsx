
import React from 'react'
import styled from 'styled-components'
import SearchBox from '../components/navbar/SearchBox/searchBox';
import { category } from '../data';
import { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import BestTag from '../components/BestTag';
import { Newsletter } from '../components/NewsLetter';

const Container = styled.div`
margin-left: 20px;
display:flex;
flex-direction: column;

`;
const Wrapone = styled.div`
display: flex;
align-items:center;

`;
const Search = styled.div`
flex: 6;
padding-left: 400px;
`
;

const Logo = styled.div`
flex: 1;
`;
const Wraptwo = styled.div`

width:100%;
height: 90vh;
position:relative;
display:flex;
overflow:hidden;
margin-top: 40px;

`;
const Title = styled.h1`
margin-top: 30px;
`;

const Arrow = styled.div`
width:50px;
height:50px;
border-radius: 50%;
// background-color: #424953;
position: absolute;
top:0;
bottom:0;
margin:auto;
display:flex;
align-items:center;
justify-content: center;
left: ${(props) => props.direction==="left" && "10px"};
right: ${(props) => props.direction==="right" && "10px"};
cursor: pointer;
opacity: 0.5;


`;
const Cover = styled.div`
display: flex;
height:100%;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
display:flex;
align-items: center;
width: 100vw;
height: 100vh;
padding:30px;
background-color: ${(props) => props.bg};
`;
const ImgContainer = styled.div`
flex: 1;
height: 100%;


`;
const Image = styled.img`
height: 80%;
`;
const InfoContainer = styled.div`
flex : 1;
letter-spacing:3px;
padding: 50px;
display:flex;
flex-direction:column;
align-items:center;

`;



const Button = styled.button`
padding: 10px 30px;
margin: 50px;
cursor:pointer;
background-color: transparent;
border-radius: 10px;


`;

const Desc = styled.div`

font-size:100px;
font-weight:300;`;





const Category = () => {

  const[slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction)=>
   {
 
     if(direction==="left")
       {
         setSlideIndex(slideIndex>0?slideIndex-1:2);
       }
     if(direction==="right")

        {
           setSlideIndex(slideIndex<3? slideIndex+1:0);
        }
   };

  return (
    <Container>
      <Wrapone>
        <Logo >
         <a href="/">
            <svg width="10em" height="66" viewBox="0 0 316 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.0504 3H5.42832C3 3 3 4.66226 3 5.46103C3 6.25981 3 68.0381 3 70.4665C3 72.8949 5.42832 72.8949 5.42832 72.8949H56.0504C56.0504 72.8949 58.2919 72.8949 58.2919 70.4665V44.8753C58.2919 42.8205 56.0504 42.8205 56.0504 42.8205M56.0504 42.8205H35.3159C35.3159 42.8205 33.4479 42.8205 33.4479 44.8753C33.4479 46.93 33.4479 58.1379 33.4479 58.1379M56.0504 42.8205C56.0504 42.8205 57.5448 42.6337 58.6655 43.7545C59.7863 44.8753 71.9281 57.3907 71.9281 57.3907C71.9281 57.3907 82.8473 44.3149 83.3228 43.5677C83.7983 42.8205 84.8171 42.8205 84.8171 42.8205V72.8949M111.903 42.8205H91.7287M111.903 72.8949H91.7287M121.99 42.8205H139.922C139.922 42.8205 142.164 42.8205 142.164 44.8753V54.9623C142.164 57.3907 139.922 57.3907 139.922 57.3907C133.839 57.3907 128.154 57.3907 124.605 57.3907C121.056 57.3907 121.056 57.5775 124.605 60.3794C128.154 63.1814 142.164 72.8949 142.164 72.8949M91.7287 57.3907H111.903M150.757 42.8205H117.88M150.757 49.9188H117.88M189.984 42.8205V57.8577M189.984 72.8949V57.8577M210.158 42.8205V57.8577M210.158 72.8949V57.8577M189.984 57.8577H210.158M221.179 72.8949C222.499 69.7656 224.869 63.7168 227.139 57.8577M249.572 72.8949C249.572 72.8949 246.039 65.3781 242.497 57.8577M259.659 72.8949C259.659 72.8949 259.659 44.8753 259.659 42.8205C259.659 40.7657 282.635 75.1365 282.635 72.8949C282.635 70.6533 282.635 42.8205 282.635 42.8205M227.139 57.8577C230.022 50.4145 232.744 43.2773 232.947 42.8205C233.695 41.1393 234.37 40.9525 235.376 42.8205C235.615 43.2656 239.061 50.5633 242.497 57.8577M227.139 57.8577H242.497M303.183 42.8205V72.8949M293.096 42.8205H313.27M181.578 42.8205H161.404C161.404 42.8205 158.976 42.8205 158.976 44.8753C158.976 46.93 158.976 70.4665 158.976 70.4665C158.976 72.8949 161.404 72.8949 161.404 72.8949L181.578 72.8949M35.8763 35.9092H56.0504C56.0504 35.9092 58.2919 35.9092 58.2919 33.4808V14.6142C58.2919 12.5594 56.0504 12.5594 56.0504 12.5594H35.8763C35.8763 12.5594 33.4479 12.5594 33.4479 14.6142C33.4479 16.669 33.4479 33.4808 33.4479 33.4808C33.4479 35.9092 35.8763 35.9092 35.8763 35.9092ZM74.3565 35.9092H94.5306C94.5306 35.9092 96.7722 35.9092 96.7722 33.4808V14.6142C96.7722 12.5594 94.5306 12.5594 94.5306 12.5594H74.3565C74.3565 12.5594 71.9281 12.5594 71.9281 14.6142C71.9281 16.669 71.9281 33.4808 71.9281 33.4808C71.9281 35.9092 74.3565 35.9092 74.3565 35.9092ZM110.782 35.9092H133.384C133.384 35.9092 135.626 35.9092 135.626 33.4808V14.6142C135.626 12.5594 133.384 12.5594 133.384 12.5594L110.782 12.3726C110.782 14.4274 110.782 35.9092 110.782 35.9092Z" stroke="url(#paint0_linear_82_130)" stroke-width="5" stroke-linecap="round" />
                <defs>
                    <linearGradient id="paint0_linear_82_130" x1="158.042" y1="72.8622" x2="158.042" y2="3" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#6224A0" />
                        <stop offset="1" stop-color="#133AC7" />
                    </linearGradient>
                </defs>
            </svg>
        </a>
        </Logo>

       {/* <Search ><SearchBox /></Search> */}
       </Wrapone>
       <BestTag />
       <Title>Shop By Category</Title>
       <Wraptwo>
         
          <Cover slideIndex = {slideIndex}>
          {
        category.map((item) => (
          <Slide key = {item.id} bg = {item.bg} >
           
            
              <ImgContainer >
              <Image src ={item.img}/>
              </ImgContainer>
              <InfoContainer>
                <Desc> {item.caption}</Desc>
              <Button>SHOP </Button>
              </InfoContainer >
              </Slide>
          
        )
        )
          }

          
          </Cover>
          <Arrow direction = "left" onClick={()=>handleClick("left")}>
<ArrowLeftOutlined />
</Arrow>

<Arrow direction = "right" onClick={()=>handleClick("right")}>
    <ArrowRightOutlined />
</Arrow>
       </Wraptwo>
       <Newsletter />
    </Container>
  )
}

export default Category