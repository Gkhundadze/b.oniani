import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'



function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ms82eju', 'template_c0aqjoq', form.current, 'xsNhbSmXgDhyWmtxn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <div className='contact'>
            <form className='df fldir-col color-white ta-center align-center' ref={form} onSubmit={sendEmail}>

                <label className='name-label bold'>თქვენი სახელი</label>

                <input
                    className='name-input'
                    type="text"
                    name="name"
                    placeholder='მაგ: გიორგი'
                    required
                />

                <label className='email-label bold'>თქვენი Email მისამართი</label>

                <input
                    className='email-input'
                    type="email"
                    name="email"
                    placeholder='მაგ: example@gmail.com'
                    required
                />
                <label className='message-label bold'>წერილის სათაური</label>

                
                <input
                    className='subject-input'
                    type='text'
                    name="subject"
                    placeholder='წერილის სათაური'
                    required />
                <label className='message-label bold'>რისი თქმა გსურს</label>
                <textarea
                    className='message color-white'
                    name="message"
                    required />
                <input
                    className='send-btn'
                    type="submit"
                    value="გაგზავნა"
                />
            </form>
        </div>
    );
}
export default Contact;