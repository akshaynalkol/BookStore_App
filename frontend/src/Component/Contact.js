import React from 'react';

const Contact = () => {
    return (
        <>
            <div className='container py-5'>
                <h2 className="mb-5 text-center">
                    Contact<span className="text-pink"> Us :)</span>
                </h2>
                <div className='row justify-content-center'>
                    <div className='col-lg-6 col-md-8 col-md-10  text-center'>
                        <form action='https://formspree.io/f/xeojjbdp' method='post'>
                            <input name='Name' type='text' className='form-control mb-3' required
                                placeholder='Enter Your Name' />
                            <input name='Email' type='email' className='form-control mb-3' required
                                placeholder='Email Address' />
                            <input name='Phone' type='tel' className='form-control mb-3' required
                                placeholder='Mobile Number' pattern="[0-9]{3}[0-9]{3}[0-9]{4}" />
                            <textarea name='Message' className='form-control mb-3' rows={5} required
                                placeholder='Type Your Message'>
                            </textarea>
                            <button className='btn btn-dark bg-pink border-0'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;