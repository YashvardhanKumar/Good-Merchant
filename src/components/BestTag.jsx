import { AttachMoneyOutlined, LocalOffer, LocalOfferOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
display:flex;
justify-content:center;
background-color: #f5f5f5;
align-items: center;
margin-top: 30px;

`;
const Tag = styled.div`
display:flex;
align-items: center;
margin-right: 30px;
padding: 10px;
font-weight:bold;
`;
const Tagname = styled.span`
padding-left: 5px;`;


const BestTag = () => {
  return (
    <Container>

        <Tag>
            <LocalOfferOutlined />
            <Tagname >BEST BRANDS</Tagname>
        </Tag>
        
        <Tag>
            <ShoppingCartOutlined />
            <Tagname >BEST RETAILERS</Tagname>
        </Tag>
        
        <Tag>
            <AttachMoneyOutlined/>
            <Tagname >BEST PRICES</Tagname>
        </Tag>
    </Container>
  )
}

export default BestTag