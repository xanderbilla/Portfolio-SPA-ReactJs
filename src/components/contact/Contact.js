import React, { useContext, useRef, useState } from 'react'
import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../Context'
import Brand from '../../assets/Brand'

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_n7hvji9', 'template_6datr2j', formRef.current, 'zsuN80wIBe811t_nq')
            .then((result) => {
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Let's discuss your project</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={Phone} alt="" className="contact-icon" />
                            +1 1234 556 75
                        </div>
                        <div className="contact-info-item">
                            <img className="contact-icon" src={Email} alt="" />
                            contact@lama.dev
                        </div>
                        <div className="contact-info-item">
                            <img className="contact-icon" src={Address} alt="" />
                            245 King Street, Touterie Victoria 8520 Australia
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && " Thank you..."}
                    </form>
                </div>
            </div>
            <p className='copyright'>This page is created by - <a href="https://xanderbilla.vercel.app" target="_blank" rel="noreferrer"><Brand height={30}  /></a></p>
            
        </div>
    )
}

export default Contact