import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

// Carousal
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Components
import Cards from '../../reusable/cards/cards';
import { Items } from './data';
import Bottom from './bottom';

// Animation
import AOS from 'aos';
import 'aos/dist/aos.css';


function Carousal() {

    useEffect(() => {
        AOS.init({ duration: "500", delay: "400", once: true });
    }, [])


    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        arrows: false,


    };

    return (
        <>
            <div data-aos="fade-up">
                <Box sx={{ py: 10, bgcolor: '#fafafa' }}>
                    <Slider {...settings} >
                        {Items.map((item) => (
                            <Box key={item.id} >
                                <Cards item={item} />
                            </Box>
                        ))}
                    </Slider>
                </Box>
                <Box sx={{ pt: 10, bgcolor: '#fafafa' }}>
                    <Bottom />
                </Box>
            </div>
        </>
    );
}

export default Carousal;
