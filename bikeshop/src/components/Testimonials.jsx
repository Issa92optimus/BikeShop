import { IconQuote } from "@tabler/icons-react";
import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg"

function Testimonials() {
    return (
        <>
            <section className="testimonials-section">
                <div className="container">
                    <div className="testimonials-content">
                        <div className="testimonials-content_title">
                            <h4>Reviewed by People</h4>
                            <h2>Client's Testimonials</h2>
                            <p>
                                Discover the positive impact we've made on the our clients by
                                reading through their testimonials. Our clients have experienced
                                our service and results, and they're eager to share their
                                positive experiences with you.
                            </p>
                        </div>

                        <div className="all-testimonials">
                            <div className="all-testimonials-box">
                                <span className="quotes-icon">
                                    <IconQuote width={60} height={60} />
                                </span>
                                <p>
                                    "We rented a bike from this website and had an amazing
                                    experience! The booking was easy and the rental rates were
                                    very affordable. "
                                </p>
                                <div className="all-testimonials_box_name">
                                    <div className="all-testimonials_box_name_profile">
                                        <img src={Img2} alt="user_img" />
                                        <span>
                                            <h4>Kate</h4>
                                            <p>Thika</p>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="all-testimonials_box box-2">
                                <span className="quotes-icon">
                                    <IconQuote width={60} height={60} />
                                </span>
                                <p>
                                    "The bike was in great condition and made our trip even better.
                                    Highly recommend for this car rental website!"
                                </p>
                                <div className="all-testimonials_box_name">
                                    <div className="all_testimonials_box_name_profile">
                                        <img src={Img3} alt="user_img" />
                                        <span>
                                            <h4>Ron</h4>
                                            <p>Nakuru</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonials;