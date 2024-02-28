import SelectBike from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Ride from "../images/plan/icon3.png";

function PlanTrip() {
    return (
        <>
            <section className="plan-section">
                <div className="container">
                    <div className="plan-container">
                        <div className="plan-container_title">
                            <h3>Plan your trip now</h3>
                            <h2>Quick & easy bike rental</h2>
                        </div>

                        <div className="plan-container_boxes">
                            <div className="plan-container_boxes_box">
                                <img src={SelectBike} alt="icon_img" />
                                <h3>Select Bike</h3>
                                <p>
                                    We offers a big range of bicycles for all your cycling needs.
                                    We have the perfect bikes to meet your needs.
                                </p>
                            </div>

                            <div className="plan-container_boxes_box">
                                <img src={Contact} alt="icon_img" />
                                <h3>Contact Operator</h3>
                                <p>
                                    Our knowledgeable and friendly operators are always ready to
                                    help with any questions or concerns.
                                </p>
                            </div>

                            <div className="plan-container_boxes_box">
                                <img src={Ride} alt="icon_img" />
                                <h3>Let's Ride</h3>
                                <p>
                                    When you're hitting the open road, we've got you covered
                                    with our wide range of bikes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default PlanTrip;