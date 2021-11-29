import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div style={{
            backgroundColor: '#262626'
        }}>
            <div className="contact-section container" id='contact'>
                <h2 className="text-center contact-header">Contact</h2>
                <div className="contact-hr" ></div>
                <div className="text-center" >
                    <span className="who">Get In Touch</span>
                </div>
                <div className='text-center my-3 text-white'>
                    <p>I am available to work on your projects and bring your ideas to life.<br /> I am just a click away.</p>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className='contact-info d-flex  align-items-center'>
                            <div className='contact-image-div'>
                                <i class="fas fa-2x fa-map-marker-alt"></i>
                            </div>
                            <p className='contact-info-text'>G.R.A Ikeja, Lagos</p>
                        </div>
                        <div className='contact-info  d-flex  align-items-center'>
                            <div className='contact-image-div'>
                                <i class="far fa-2x fa-envelope"></i>
                            </div>
                            <a className='contact-info-text' href='mailto:bcse.hasibul@gmail.com'>bcse.hasibul@gmail.com</a>
                        </div>
                        <div className='contact-info  d-flex  align-items-center'>
                            <div className='contact-image-div'>
                                <i class="fas fa-2x fa-phone-square-alt"></i>
                            </div>
                            <a className='contact-info-text' href='tel:+88 01765471227'>+88 01765471227</a>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <form className='contact-form' name='contact' method='POST'>

                            <input type='text' placeholder="Full Name" name='name' required />
                            <div>
                                <input type='email' placeholder='Email' name='email' required />
                                <input type='number' placeholder="Phone Number" name='phone-number' required />
                            </div>
                            <textarea name='message' id="" cols='30' rows='10' placeholder="Enter your message" required></textarea>
                            <div className="text-center">
                                <button className="contact-submit-button" type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;