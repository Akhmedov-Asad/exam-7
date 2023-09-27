import '../sass/footer.scss'
import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import EatlyIcon from '../../public/assets/LogoEatly.svg';
import SocialIcons from '../../public/assets/Socials.png';

const Footer = () => {
    const memoizedElements = useMemo(
        () => (
            <footer className="footer">
                <div className="container mx-auto footer__container">
                    <div className="footer__block">
                        <div className="footer__top">
                            <Link href="/">
                                <Image src={EatlyIcon} alt="EatlyIcon" />
                            </Link>
                        </div>
                        <div className="footer__bottom">
                            <span>© 2023 EATLY All Rights Reserved.</span>
                            <div className="social__img">
                                <Image src={SocialIcons} alt="SocialIcons" />
                            </div>
                        </div>
                    </div>

                    <div className="footer__responsive">
                        <div className="footer__top2">
                            <Link href="/">
                                <Image src={EatlyIcon} alt="EatlyIcon" />
                            </Link>
                            <div className="social__img2">
                                <Image src={SocialIcons} alt="SocialIcons" />
                            </div>
                        </div>
                        <div className="footer__bottom2">
                            <p>© 2023 EATLY All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        ),
        []
    );

    return memoizedElements;
};

export default Footer;