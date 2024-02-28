import { IconPhone } from "@tabler/icons-react";
import PlanTrip from "../components/PlanTrip";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function About() {
    return (
        <>
            <section className="about-page">
                <HeroPages name="About">
                    <div className="container">
                        <div className="about-main">
                            <img
                                className="about-main_img"
                                src={AboutMain}
                                alt="bike-renting"
                            />
                            <div className="about-main_text">
                                <h3>About Company</h3>
                                <h2>Start to pedal and begin your adventures</h2>
                                <p>
                                    Certainity of giving our clients a fun time riding is what we ensure to guarantee for you
                                    as we keep on striving to make your dreams a reality.The goal is to ensure that all the cyclist
                                    and riders out there get to have the best riding experience when they rent our bikes.
                                </p>
                                <div className="about-main_text_icons">
                                    <div className="about-main_text_icons_box">
                                        <img src={Box1} alt="bike-icon" />
                                        <span>
                                            <h4>20</h4>
                                            <p>Bike Types</p>
                                        </span>
                                    </div>
                                    <div className="about-main_text_icons_box">
                                        <img src={Box2} alt="bike-icon" />
                                        <span>
                                            <h4>85</h4>
                                            <p>Rental Outlets</p>
                                        </span>
                                    </div>
                                    <div className="about-main_text_icons_box">
                                        <img src={Box3} alt="bike-icon" className="last-fk" />
                                        <span>
                                            <h4>75</h4>
                                            <p>Repair Shop</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PlanTrip />
                    </div>
                </HeroPages>
            </section>
            <div className="book-banner">
                <div className="book-banner_overlay"></div>
                <div className="container">
                    <div className="text-content">
                        <h2>Rent a bike by getting in touch with us</h2>
                        <span>
                            <IconPhone width={40} height={40} />
                            <h3>(254) 759-5154-50</h3>
                        </span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;