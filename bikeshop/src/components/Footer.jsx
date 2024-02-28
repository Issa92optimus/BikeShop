import { IconMail, IconPhoneCall } from "@tabler/icons-react";

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <ul className="footer-content_1">
                            <li>
                                <span>BIKE</span> Rental
                            </li>
                            <li>
                                We offers a big range of bicycles for all your cycling needs. We
                                have the perfect bikes to meet your needs.
                            </li>
                            <li>
                                <a href="tel:254759515450">
                                    <IconPhoneCall /> &nbsp; (254) 759-5154-50
                                </a>
                            </li>

                            <li>
                                <a href="mailto: issanyale446@gmail.com">
                                    <IconMail /> &nbsp; issanyale446@gmail.com
                                </a>
                            </li>

                            <li>
                                <a
                                    style={{ fontSize: "14px" }}
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://github.com/Issa92optimus"
                                >
                                    Design by Issa Changawa.
                                </a>
                            </li>
                        </ul>

                        <ul className="footer-content_2">
                            <li>Company</li>
                            <li>
                                <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationsonline.org%2Foneworld%2Fmap%2Fkenya_map2.htm&psig=AOvVaw0Lo-Ju_T_Ydl1pmVY3F6jg&ust=1709226420875000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIi7_d7CzoQDFQAAAAAdAAAAABAE">Kenya</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/jobs/jobs-in-kenya?position=1&pageNum=0">Careers</a>
                            </li>
                            <li>
                                <a href="#contact">Mobile</a>
                            </li>
                            <li>
                                <a href="#about">Blog</a>
                            </li>
                            <li>
                                <a href="#about">How we work</a>
                            </li>
                        </ul>

                        <ul className="footer-content_2">
                            <li>Working Hours</li>
                            <li>Mon - Fri: 9:00AM - 5:00PM</li>
                            <li>Sat: 9:00AM - 4:00PM</li>
                            <li>Sun: Closed</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;