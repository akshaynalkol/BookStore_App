import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className='container py-5'>
                <h2 className="mb-5 text-center">
                    About <span className="text-pink"> Us :)</span>
                </h2>
                <div className='row gy-4 justify-content-center align-items-center'>
                    <div className='col-lg-6'>
                        <img src='https://img.freepik.com/premium-vector/hand-drawn-flat-design-book-club-illustration_23-2149341891.jpg?w=740'
                            alt='Book' className='w-100' />
                    </div>
                    <div className='col-lg-6'>
                        <h5 className='text-pink mb-3'>" There is no friend as loyal as a book "</h5>
                        <p className='text-justify mb-3'>
                            Books are like our fellow friend with no demands
                            and complaints. They improve our knowledge, wisdom, and information, thus helping us in
                            taking the right decisions in life. Books are the best option for self-learners to avail of
                            information on all issues and topics. Great Authors, writers, and poets put all their emotions,
                            thoughts and experience to make books important and beneficial for us. The treasure of books is
                            inexhaustible, as they continuously extract the gold of art, literature, science, and philosophy
                            for us. Books pass the knowledge from generation to generation which ultimately helps in the
                            advancement of civilizations.
                        </p>
                        <NavLink to='/signup' className='btn btn-dark bg-pink border-0'>Get Started</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;