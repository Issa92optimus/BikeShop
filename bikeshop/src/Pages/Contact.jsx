import { IconMailOpened, IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { IconLocation } from "@tabler/icons-react";

function Contact() {
    return (
        <>
            <section className="contact-page">
                <HeroPages name="Contact" />
                <div className="container">
                    <div className="contact-div">
                        <div className="contact-div_text">
                            <h2>Need additional information?</h2>
                            <p>
                                Professionaly skilled in multiple fields of
                                research, development as well as a learning specialist. Over 3
                                years of software experience.<b>Find my email at the page below if you cant reach me via a phone call.</b>
                            </p>
                            <a href="/">
                                <IconPhone /> &nbsp; (254) 759-5154-50
                            </a>
                            <a href="/">
                                <IconLocation /> &nbsp; Nairobi, Kenya
                            </a>
                        </div>
                        <div className="contact-div_form">
                            <form>
                                <label>
                                    Full Name <b>*</b>
                                </label>
                                <input type="text" placeholder='E.g: "Issa"'></input>

                                <label>
                                    Email <b>*</b>
                                </label>
                                <textarea placeholder="Write Here.."></textarea>

                                <button type="submit">
                                    <IconMailOpened /> &nbsp; Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <Footer>
                    <div className="book-banner">
                        <div className="book-banner__overlay"></div>
                        <div className="container">
                            <div className="text-content">
                                <h2>Rent a bike by getting in touch with us</h2>
                            </div>
                        </div>
                    </div>
                </Footer>
            </section>
        </>
    );
}

export default Contact;