import React, { useRef } from 'react';
import { Box } from '@mui/material';

// Carousal
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Components
import Cards from './cards';
import { Items } from './data';
import Bottom from './bottom';



function Carousal() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        

    };

    return (
        <>
            <Box sx={{ py: 10, bgcolor: '#fafafa'}}>
                <Slider {...settings} >
                    {Items.map((item) => (
                        <Box key={item.id} >
                            <Cards item={item} />
                        </Box>
                    ))}
                </Slider>
            </Box>
            <Box  sx={{ py: 10, bgcolor: '#fafafa'}}>
                <Bottom />
            </Box>
        </>
    );
}

export default Carousal;
