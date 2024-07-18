import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import Cards from './Cards';
import axios from 'axios';

const FreeBook = () => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                let res = await axios.get('http://localhost:4002/book');
                // console.log(res.data);

                setBook(res.data.filter(item => item.category === 'Free'));
            } catch (error) {
                console.log(error);
            }
        }
        getBook();
    }, []);

    const settings = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className='container py-5 mb-5 text-justify'>
                <h5 className="fw-semibold">Free Offered Courses</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
                    corporis nulla non suscipit, iure neque earum?
                </p>
                <div className=''>
                    <Slider {...settings}>
                        {
                            book.map(item => (
                                <Cards item={item} key={item.id} />
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeBook;