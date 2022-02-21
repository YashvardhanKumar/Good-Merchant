import './IntroCards.light.css'
import './IntroCards.dark.css'
import React from 'react'
import largelogo from '../../svgs/logolarge.light.svg'
import largelogodark from '../../svgs/logolarge.dark.svg'
import shoppingimg from '../../svgs/imageshopping.png'

function CardView() {
    return (
        <div className='card-container'>
            <div className="initial">
                <div className='logo-card'>
                    <img src={largelogodark} width="100%" height="108" alt="" />
                </div>
                <div className='quote'>
                    Where you find the Best Price !!
                </div>
                <div className='description'>
                    The one and only Website where you get the lowest price of the same product from multiple E-commerce sites !
                </div>
            </div>
            <div className='about'>
                <div className="what">
                    What is Good Merchant
                </div>
                <div className='description'>
                    Do you have sudden shopping tendencies?
                    The fastest way to do so is through the internet. But there are way too many sites and too many brands, and most of the time, this doesn’t turn out to be the cheapest way.
                    But worry not, Good Merchant has got your back.
                    All you need to do is upload the picture of the object you wish to buy or the URL of an image, and our ML model will identify the item and give you the lowest price of it available on the internet.
                    With the help of Good Merchant, you can now begin your journey towards saving money.
                    <img className='shoppingimg' src={shoppingimg} height={"100%"} width={"100%"} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CardView