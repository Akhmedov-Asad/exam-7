import '../sass/popularity.scss'
import React from 'react'

const Popularity = () => {
    return (
        <section className='popularity'>
            <div className='container mx-auto popularity__block'>
                <ul>
                    <li>
                        <h3>10K+</h3>
                        <p>Satisfied Costumers
                            All Great Over The World </p>
                    </li>
                    <li>
                        <h3>4M</h3>
                        <p>Healthy Dishes SoldIncluding Milk Shakes Smooth</p>
                    </li>
                    <li className='popularity__item0'>
                        <h3>99.99%</h3>
                        <p>Reliable Customer SupportWe Provide Great Experiences</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default React.memo(Popularity)