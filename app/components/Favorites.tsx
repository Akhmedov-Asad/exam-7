import '../sass/favorite.scss'
import React, { useMemo } from 'react';
import Image from 'next/image';

import ChikenImg from '../../public/assets/favoriteImg.jpg';
import StarIcon from '../../public/assets/Star.png';
import BookMark from '../../public/assets/Bookmark.png';

const ChikenImage = () => {
    return <Image className="chiken" src={ChikenImg} alt="ChikenImg" />;
};

const FavoriteItem = () => {
    return (
        <div className="favorite__block-f">
            <li className="favorite__items2">
                <p>24min •</p>
                <Image src={StarIcon} alt="StarIcon" />
                <span>4.8</span>
            </li>
            <li className="favorite__items3">
                <Image src={BookMark} alt="izbrannoe " />
            </li>
        </div>
    );
};

const Favorites = () => {
    const memoizedElements = useMemo(
        () => (
            <section className="Favorites">
                <div className="container mx-auto">
                    <div className="favorite__chiken-img">
                        <ChikenImage />
                        <ul>
                            <li className="favorite__items1">
                                <button>Healthy</button>
                            </li>
                            <li className="favorite__item1">
                                <h4>The Chicken King</h4>
                            </li>
                            <FavoriteItem />
                            <li className="favorite__item2">
                                <p>24min •</p>
                                <Image src={StarIcon} alt="StarIcon" />
                                <span>4.8</span>
                            </li>
                            <li className="favorite__item3">
                                <Image src={BookMark} alt="izbrannoe " />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        ),
        []
    );

    return memoizedElements;
};

export default Favorites;