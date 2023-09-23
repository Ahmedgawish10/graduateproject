import React from 'react'
import "./contact.css";
const Contact = () => {
    return (
    <section className="contact section pt-5 "id="contact">
        <h2 className="section__title text-center pt-5">Get in touch</h2>
            <span className="section__subtitle text-center d-block pb-5">Contact us</span>
        
        <div className="contact__container container grid">
            <div className="contact__content-talk">
                <h3 className="contact__title pb-3">Talk to us</h3>

                <div className="contact__info">
                    {/*========================= contact 1======== */}
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <p className="contact__card-data">SokaryTeam@gmail.com</p>
                        <a href="mailto:ahmdgawish22@gmail.com" className="contact__card-button">
                            Write us <i className=" uil uil-arrow-right icon "></i>
                        </a>
                    </div>
                    {/*========================= contact 2======== */}
                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>
                        <h3 className="contact__card-title">Whatsapp</h3>
                        <p className="contact__card-data">010-648-805-94</p>
                        <a href="https://wa.me/+0201064880594" className="contact__card-button">
                            Write us <i className=" uil uil-arrow-right icon "></i>
                        </a>
                    </div>
                    {/*========================= contact 3======== */}
                    <div className="contact__card">
                        <i className="bx bxl-messenger contact__card-icon"></i>
                        <h3 className="contact__card-title">Messenger</h3>
                        <p className="contact__card-data">SokaryTeam</p>
                        <a href="" className="contact__card-button">
                            Write us <i className=" uil uil-arrow-right icon "></i>
                        </a>
                    </div>

                </div>
            </div>
            <div className="contact__content-form">
                <h3 className="contact__title pb-3">Write your notes</h3>
                <form action="" className="contact__form">
                    <div className="contact__form-layout">
                        <label className="contact__form-label bg-light">Name</label>
                        <input type="text" name="name" className="contact__input-name" placeholder="Type your name !"/>

                    </div>
                    <div className="contact__form-layout">
                        <label className="contact__form-label bg-light">Mail</label>
                        <input type="email" name="email" className="contact__input-name" placeholder="Type your email !"/>
                        
                    </div>
                    <div className="contact__form-layout contact__textarea">
                        <label className="contact__form-label bg-light">Notes</label>
                        <textarea name="project"  cols="10" rows="1" className="contact__textarea"
                         placeholder="Type your Note !"></textarea>                        
                    </div>
                    <div>
                    <button className="button button--flex send__us">
                    Send Message
                
                </button>
                </div>
                </form>
            </div>
        </div>


    </section>
    )
}

export default Contact
