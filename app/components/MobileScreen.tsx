import '../sass/mobileScreen.scss'
import Image from 'next/image'
import React from 'react'

import MobileScreenImg from '../../public/assets/MobileScreen.png'
import arrowRight from '../../public/assets/arrowRightt.png'

const MobileScreen = () => {
    return (
        <section className='mobilSc'>
           <div className="container mx-auto mobilScreen__block">
               <div className='mobileS__left'>
                <Image src={MobileScreenImg} alt='MobileScreenImg' />
               </div>
               <div className='mobileS__right'>
                <h3>Premium <span>Quality</span> For Your Health</h3>
                <p className='mobileS__subtitle1'>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</p>
                <p className='mobileS__subtitle2'>These foods promote overall wellness by support healthy digestion and boosting immunity</p>
                <button>Download
                    <Image src={arrowRight} alt='arrowRight'/>
                </button>
               </div>
               <div className='mobileS__left2'>
                <Image src={MobileScreenImg} alt='MobileScreenImg' />
               </div>
           </div>
        </section>
    )
}

export default React.memo(MobileScreen)