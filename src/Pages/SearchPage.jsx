import React from 'react'
import { data } from './data';
import styled from 'styled-components'
import SearchBox from '../components/navbar/SearchBox/searchBox';


const Container = styled.div`
padding: 100px;
// top: 100px;

display: flex;
flex-direction: column;
  // position: absolute;
  width: fit-content;
  overflow-x: hidden;

`;

const Website = styled.div`
width: 100%;
height: 34px;
background: rgba(61, 44, 141, 0.5);
backdrop-filter: blur(80px);
display: flex;
align-items: center;
border-radius: 15px 15px 0px 0px;
justify-content: center;
`
const Webname = styled.div`
border-radius: 15px 15px 0px 0px;
font-family: Roboto;
font-style: normal;
font-weight: normal;

text-align: center;


color: rgba(255, 255, 255, 0.78);
`

const Italic = styled.i`
color: grey;
`
const Title = styled.h2`
height: max-content;
display: flex;
flex-direction: column;
color: #fff;
justify-content: center;
padding: 18px;
background: rgba(7, 4, 48, 0.7);
backdrop-filter: blur(30px);
border-radius: 15px;
`;
const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
align-items: center;
justify-content: center;
padding: 30px;
`;

const Cover = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width: 300px;

margin: 10px;

background: rgba(255, 255, 255, 0.32);
border: 1px solid rgba(255, 255, 255, 0.24);
box-sizing: border-box;
backdrop-filter: blur(80px);
border-radius: 15px;
`;


const Image = styled.img`
height: 100%;
width: 100%;
object-fit:contain;
margin-bottom: 20px;

`;
const InfoContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width: 100%;
`;

const A = styled.a`
text-decoration-line: none;
color: #9DFFE7;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
height: 80px;
width: 100%;
background: #1C0C5B;


`
const AImage = styled.a`
text-decoration-line: none;
color: #9DFFE7;
height: 200px;

`

const Desc = styled.span`
font-size: 14px;

position: relative;
display: inline-block;
word-wrap: break-word;
overflow: hidden;
max-height: 3.5em; /* (Number of lines you want visible) * (line-height) */
line-height: 1.2em;
`;
const Price = styled.span`
width: 100%;
flex: 0.3;
display: flex:
align-items: center;
justify-content: center;

color: rgba(255, 255, 255, 0.71);
background: #916BBF;
backdrop-filter: blur(80px);
/* Note: backdrop-filter has minimal browser support */
border-radius: 0px 0px 15px 15px;
`
  ;

let fdata = {}
const name = new URLSearchParams(window.location.search).get('q') || 'all';
if (name) { 
  const lowercasedValue = name.toLowerCase().trim();
  if (lowercasedValue.startsWith("all")) fdata = data;
  else if (lowercasedValue === "") fdata = data
  else {
    fdata = data.filter(item => Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(lowercasedValue)
    ))
    for (let i = 0; i < fdata.length; i++) {
      fdata.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
    }
  }
}


const SearchPage = () => {
  return (
    <Container>
      <Title> Results for "{name}"
        <Italic>{(fdata) ? fdata.length : "0"} Results</Italic>
      </Title>
      <Wrapper>
        {
          
          (fdata) ? fdata.map((item) => (
            <Cover >
              <Website><Webname>{item.baseURL}</Webname></Website>
              <AImage href={item.productURL} >
                <Image src={item.imgURL} />
              </AImage>
              <InfoContainer>

                <A href={item.productURL} ><Desc>{item.name} </Desc> </A>
                <Price>{item.priceString} </Price>

              </InfoContainer>
            </Cover>
          )) : ""
        }
      </Wrapper>
    </Container>
  )
}

export default SearchPage
