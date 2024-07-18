import React from 'react';

const Cards = ({ item }) => {
    // console.log(item);

    return (
        <>
            <div className='p-2 h-100' >
                <div className='card shadow h-100'>
                    <img src={item.image} className='card-img-top w-100' />
                    <div className='card-body'>
                        <h5 className='card-title fw-semibold mb-3'>
                            {item.name}{' '}
                            <span className='badge bg-pink fs-6 fw-normal rounded-pill py-0 px-2'>
                                {item.category}
                            </span>
                        </h5>
                        <p className='mb-2  text-justify'>{item.description}</p>
                        <div className='d-flex justify-content-between'>
                            <span className='badge text-bg-light border rounded-pill py-2 px-3'>${item.prize}</span>
                            <span className='badge text-bg-light border rounded-pill py-2 px-3'>Buy Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;