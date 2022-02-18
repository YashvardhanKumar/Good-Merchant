import { Send } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction:column;
height: 40vh;
background-color:rgba(255,228,225, 0.4);
align-items:center;
justify-content:center;`;
const Title = styled.h1`
margin-bottom: 10px;
font-size: 3em;
`;
const Desc = styled.p`
margin-bottom: 10px;
font-weight:300;
letter-spacing: 1.5px;

`;
const Info = styled.div`
display:flex;

width:50%;
justify-content:space-between;

`;
const Input = styled.input`
margin-right: 5px;
flex:8;
border-radius:5px;
border:1px solid lightgray;
padding: 10px;
`;
const Button = styled.button`
background-color: teal;
flex:0.5;
border-radius:5px;
border: none;
color: white;
 `;


export const Newsletter = () => {
  return (
<Container> 
 <Title>Newsletter</Title>
 <Desc>Drop your mail to get price drop updates </Desc>
 <Info>
<Input type = "email" placeholder = "Enter your email" />
<Button>
<Send />
</Button>
</Info>

</Container>  )
}
