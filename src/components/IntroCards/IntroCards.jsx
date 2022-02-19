import './IntroCards.light.css'
import './IntroCards.dark.css'
import React from 'react'
import largelogo from '../../svgs/logolarge.light.svg'
import largelogodark from '../../svgs/logolarge.dark.svg'

function CardView() {
    return (
        <div className='card-container'>
            <div className="initial">
                <div className='logo-card'>
                    <img src={largelogodark} alt="" />
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
            </div>
        </div>
    )
}

export default CardView