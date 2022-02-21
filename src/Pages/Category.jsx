
import React from 'react';
import { category } from '../data';
import { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import BestTag from '../components/BestTag';
import { Newsletter } from '../components/NewsLetter';
import {lightTheme, darkTheme, GlobalStyles} from '../themes'
import styled, { ThemeProvider } from "styled-components";

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
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
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
   const [theme, setTheme] = useState("light");

   const themeToggler = () => {
     theme === "light" ? setTheme("dark") : setTheme("light");
   };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp >
    <Container>
      <Wrapone>

       <button onClick={() => themeToggler()}>Change Theme</button>
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
    </StyledApp>
    </ThemeProvider>
  )
}

export default Category