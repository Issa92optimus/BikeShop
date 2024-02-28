import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import BikeImg1 from "../images/bike-big/carrera.png";
import BikeImg2 from "../images/bike-big/bulis.png";
import BikeImg3 from "../images/bike-big/cervelo.png";
import BikeImg4 from "../images/bike-big/bmc.png";
import BikeImg5 from "../images/bike-big/colnago.png";
import BikeImg6 from "../images/bike-big/peugeot.png";
import { Link } from "react-router-dom";
import { IconBike, IconPhone, IconStar } from "@tabler/icons-react";

function Models() {
    return (
        <>
            <section className="models-section">
                <HeroPages name="Bike Models" />
                <div className="container">
                    <div className="models-div">
                        <div className="models-div_box">
                            <div className="models-div_box_img">
                                <img src={BikeImg1} alt="bike_img" />
                                <div className="models-div_box_descr">
                                    <div className="models-div_box_descr_name-price">
                                        <div className="models-div_box_descr_name-price_name">
                                            <p>Carrera</p>
                                            <span>
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                            </span>
                                        </div>
                                        <div className="models-div_box_descr_name-price_price">
                                            <h4>Ksh. 700</h4>
                                            <p>per day</p>
                                        </div>
                                    </div>
                                    <div className="models-div_box_descr_name-price_details">
                                        <span>
                                            <IconBike /> &nbsp; Zelos
                                        </span>
                                        <span style={{textAlign: "right"}}>
                                            4/5 &nbsp; <IconBike />
                                        </span>
                                        <span>
                                            <IconBike /> &nbsp; Triathlon
                                        </span>
                                        <span style={{textAlign: "right"}}>
                                            RB &nbsp; <IconBike />
                                        </span>
                                    </div>
                                    <div className="models-div_box_descr_name-price_btn">
                                        <Link onClick={() => window.scrollTo(0, 0)} to="/" >
                                            Book Bike
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="models-div_box">
                            <div className="models-div_box_img">
                                <img src={BikeImg2} alt="bike_img" />
                                <div className="models-div_box_descr">
                                    <div className="models-div_box_descr_name-price">
                                        <div className="models-div_box_descr_name-price_name">
                                            <p>Bulis</p>
                                            <span>
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                            </span>
                                        </div>
                                        <div className="models-div_box_descr_name-price_price">
                                            <h4>Ksh. 900</h4>
                                            <p>per day</p>
                                        </div>
                                    </div>
                                    <div className="models-div_box_descr_name-price_details">
                                        <span>
                                            <IconBike /> &nbsp; Aeroad
                                        </span>
                                        <span style={{ textAlign: "right" }}>
                                            4/5 &nbsp; <IconBike />
                                        </span>
                                        <span>
                                            <IconBike /> &nbsp; Triathlon
                                        </span>
                                        <span style={{ textAlign: "right" }}>
                                            Road & Gravel &nbsp; <IconBike />
                                        </span>
                                    </div>
                                    <div className="models-div_box_descr_name-price_btn">
                                        <Link onClick={() => window.scrollTo(0, 0)} to="/" >
                                            Book Bike
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="models-div_box">
                            <div className="models-div_box_img">
                                <img src={BikeImg3} alt="bike_img" />
                                <div className="models-div_box_descr">
                                    <div className="models-div_box_descr_name-price">
                                        <div className="models-div_box_descr_name-price_name">
                                            <p>Cervelo</p>
                                            <span>
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                            </span>
                                        </div>
                                        <div className="models-div_box_descr_name-price_price">
                                            <h4>Ksh. 650</h4>
                                            <p>per day</p>
                                        </div>
                                    </div>
                                    <div className="models-div_box_descr_name-price_details">
                                        <span>
                                            <IconBike /> &nbsp; CLX
                                        </span>
                                        <span style={{ textAlign: "right" }}>
                                            4/5 &nbsp; <IconBike />
                                        </span>
                                        <span>
                                            <IconBike /> &nbsp; Triathlon
                                        </span>
                                        <span style={{ textAlign: "right" }}>
                                            RB &nbsp; <IconBike />
                                        </span>
                                    </div>
                                    <div className="models-div_box_descr_name-price_btn">
                                        <Link onClick={() => window.scrollTo(0, 0)} to="/" >
                                            Book Bike
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="models-div_box">
                            <div className="models-div_box_img">
                                <img src={BikeImg4} alt="bike_img" />
                                <div className="models-div_box_descr">
                                    <div className="models-div_box_descr_name-price">
                                        <div className="models-div_box_descr_name-price_name">
                                            <p>BMC</p>
                                            <span>
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                            </span>
                                        </div>
                                        <div className="models-div_box_descr_name-price_price">
                                            <h4>Ksh. 750</h4>
                                            <p>per day</p>
                                        </div>
                                    </div>
                                    <div className="models-div_box_descr_name-price_details">
                                        <span>
                                            <IconBike /> &nbsp; Timemachine
                                        </span>
                                        <span style={{ textAlign: "right" }}>
                                            4/5 &nbsp; <IconBike />
                                        </span>
                                        <span>
                                            <IconBike /> &nbsp; Road, Triathlon
                                        </span>
                                        <span style={{ textAlign: "right" }}>
                                            Aero &nbsp; <IconBike />
                                        </span>
                                    </div>
                                    <div className="models-div_box_descr_name-price_btn">
                                        <Link onClick={() => window.scrollTo(0, 0)} to="/" >
                                            Book Bike
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="models-div_box">
                            <div className="models-div_box_img">
                                <img src={BikeImg5} alt="bike_img" />
                                <div className="models-div_box_descr">
                                    <div className="models-div_box_descr_name-price">
                                        <div className="models-div_box_descr_name-price_name">
                                            <p>Colnago</p>
                                            <span>
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                            </span>
                                        </div>
                                        <div className="models-div_box_descr_name-price_price">
                                            <h4>Ksh. 900</h4>
                                            <p>per day</p>
                                        </div>
                                    </div>
                                    <div className="models-div_box_descr_name-price_details">
                                        <span>
                                            <IconBike /> &nbsp; Caledonia
                                        </span>
                                        <span style={{ textAlign: "right" }}>
                                            4/5 &nbsp; <IconBike />
                                        </span>
                                        <span>
                                            <IconBike /> &nbsp; Triathlon
                                        </span>
                                        <span style={{ textAlign: "right" }}>
                                            Road,TT & Gravel &nbsp; <IconBike />
                                        </span>
                                    </div>
                                    <div className="models-div_box_descr_name-price_btn">
                                        <Link onClick={() => window.scrollTo(0, 0)} to="/" >
                                            Book Bike
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="models-div_box">
                            <div className="models-div_box_img">
                                <img src={BikeImg6} alt="bike_img" />
                                <div className="models-div_box_descr">
                                    <div className="models-div_box_descr_name-price">
                                        <div className="models-div_box_descr_name-price_name">
                                            <p>Peugeot</p>
                                            <span>
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                                <IconStar width={15} height={15} />
                                            </span>
                                        </div>
                                        <div className="models-div_box_descr_name-price_price">
                                            <h4>Ksh. 800</h4>
                                            <p>per day</p>
                                        </div>
                                    </div>
                                    <div className="models-div_box_descr_name-price_details">
                                        <span>
                                            <IconBike /> &nbsp; Sports Ferrara
                                        </span>
                                        <span style={{ textAlign: "right" }}>
                                            4/5 &nbsp; <IconBike />
                                        </span>
                                        <span>
                                            <IconBike /> &nbsp; Road & TT
                                        </span>
                                        <span style={{ textAlign: "right" }}>
                                            Triathlon &nbsp; <IconBike />
                                        </span>
                                    </div>
                                    <div className="models-div_box_descr_name-price_btn">
                                        <Link onClick={() => window.scrollTo(0, 0)} to="/" >
                                            Book Bike
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="book-banner">
                    <div className="book-banner_overlay"></div>
                    <div className="container">
                        <div className="text-content">
                            <h2>Rent a bike by getting in touch with us</h2>
                            <span>
                                <IconPhone width={40} height={40}/>
                                <h3>(254) 759-5154-50</h3>
                            </span>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>  
    );

}

export default Models;