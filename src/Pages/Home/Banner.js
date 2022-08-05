import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel autoPlay>
            <div>
                <img src="https://i.ibb.co/SvkmjdX/brian-kostiuk-S4j-Svc-HYc-Os-unsplash.jpg" alt='' />
                <p className="legend">Processor</p>
            </div>
            <div>
                <img src="https://i.ibb.co/r0xrdkw/daniel-hatcher-z-PHfto-Pajis-unsplash.jpg" alt='' />
                <p className="legend">Cooling Fan</p>
            </div>
            <div>
                <img src="https://i.ibb.co/Z10wy8V/christian-wiediger-c3-ZWXOv1-Ndc-unsplash.jpg" alt='' />
                <p className="legend">Ryzen Chipset</p>
            </div>
        </Carousel>
    );
};

export default Banner;