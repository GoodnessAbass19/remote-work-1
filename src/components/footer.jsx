import React from "react";
import Audio from '../images/client-audiophile.svg'
import Data from '../images/client-databiz.svg'
import Meet from '../images/client-meet.svg'
import Maker from '../images/client-maker.svg'


const Footer = () => {
    const Logo = [
        { logo: Data },
        { logo: Audio },
        { logo: Meet },
        { logo: Maker },

    ]
    return (
        <div className="flex items-center justify-center md:py-4 py-6 flex-wrap mx-auto">
            {
                Logo.map((icon) => (
                    <img src={icon.logo} alt="" />
                ))
            }
        </div>
    );
}

export default Footer;