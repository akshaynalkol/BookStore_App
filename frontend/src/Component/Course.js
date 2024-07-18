import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Cards from './Cards';
import axios from 'axios';

const Course = () => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                let res = await axios.get('http://localhost:4002/book');
                // console.log(res.data);

                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getBook();
    }, []);

    return (
        <>
            <div className='container py-5'>
                <div className='text-center mb-5'>
                    <h2 className="mb-5">
                        We're delighted to have you
                        <span className="text-pink"> Here! :)</span>
                    </h2>
                    <p className='mb-4'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                        assumenda? Repellendus, iste corrupti? Tempore laudantium
                        repellendus accusamus accusantium sed architecto odio, nisi expedita
                        quas quidem nesciunt debitis dolore non aspernatur praesentium
                        assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
                        animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
                        consequatur!</p>
                    <NavLink to='/' className='btn btn-dark bg-pink border-0'>Back</NavLink>
                </div>
                <div className='row gx-0 mt-2'>
                    {
                        book.map(item => {
                            return (
                                <div className='col-lg-3 col-md-4 col-sm-6' key={item.id}>
                                    <Cards item={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Course;