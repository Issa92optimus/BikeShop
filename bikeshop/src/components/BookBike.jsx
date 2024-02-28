import { useEffect, useState } from "react";
import BikeBianchi from "../images/bike-big/bianchi.jpg";
import BikeCannondale from "../images/bike-big/cannondale.png";
import BikeRibble from "../images/bike-big/ribble.jpg";
import BikeBMC from "../images/bike-big/bmc.jpg";
import BikeSpecialized from "../images/bike-big/specialized.jpg";
import BikeVitus from "../images/bike-big/vitus.jpg";
import { IconBike, IconInfoCircleFilled, IconX } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";

function BookBike() {
    const [modal, setModal] = useState(false); //  class - active-modal

    //booking bike
    const [bikeType, setBikeType] = useState("");
    const [pickUp, setPickUp] = useState("");
    const [dropOff, setDropOff] = useState("");
    const [pickTime, setPickTime] = useState("");
    const [dropTime, setDropTime] = useState("");
    const [bikeImg, setBikeImg] = useState("");

    // modal infos
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipCode] = useState("");


    // taking value of modal inputs
    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const handlePhone = (e) => {
        setPhone(e.target.value);
    };

    const handleAge = (e) => {
        setAge(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleAddress = (e) => {
        setAddress(e.target.value);
    };

    const handleCity = (e) => {
        setCity(e.target.value);
    };

    const handleZip = (e) => {
        setZipCode(e.target.value);
    };

    // open modal when all inputs are fulfilled
    const openModal = (e) => {
        e.preventDefault();
        const errorMsg = document.querySelector(".error-message");
        if (
            pickUp === "" ||
            dropOff === "" ||
            pickTime === "" ||
            dropTime === "" ||
            bikeType === ""
        ) {
            errorMsg.style.display = "flex";
        } else {
            setModal(!modal);
            const modalDiv = document.querySelector(".booking-modal");
            modalDiv.scroll(0, 0);
            errorMsg.style.display = "none";
        }
    };

    // disable page scroll when modal is displayed
    useEffect(() => {
        if (modal === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [modal]);

    // confirm modal booking
    const confirmBooking = (e) => {
        e.preventDefault();
        setModal(!modal);
        const doneMsg = document.querySelector(".booking-done");
        doneMsg.style.display = "flex";
    };

    // taking value of booking inputs
    const handleBike = (e) => {
        setBikeType(e.target.value);
        setBikeImg(e.target.value);
    };

    const handlePick = (e) => {
        setPickUp(e.target.value);
    };

    const handleDrop = (e) => {
        setDropOff(e.target.value);
    };

    const handlePickTime = (e) => {
        setPickTime(e.target.value);
    };

    const handleDropTime = (e) => {
        setDropTime(e.target.value);
    };

    // based on value name show bike img
    let imgUrl;
    switch (bikeImg) {
        case "Bianchi":
            imgUrl = BikeBianchi;
            break;
        case "Cannondale Synapse":
            imgUrl = BikeCannondale;
            break;
        case "Ribble Ultra SL":
            imgUrl = BikeRibble;
            break;
        case "BMC Timemachine":
            imgUrl = BikeBMC;
            break;
        case "Specialized Roubaix":
            imgUrl = BikeSpecialized;
            break;
        case "Vitus Zenium":
            imgUrl = BikeVitus;
            break;
        default:
            imgUrl = "";
    }

    // hide message
    const hideMessage = () => {
        const doneMsg = document.querySelector(".booking-done");
        doneMsg.style.display = "none";
    };

    return (
        <>
            <section id="booking-section" className="book-section">
                {/* overlay */}
                <div
                    onClick={openModal}
                    className={`modal-overlay ${modal ? "active-modal" : ""}`}
                ></div>

                <div className="container">
                    <div className="book-content">
                        <div className="book-content__box">
                            <h2>Rent a bike</h2>

                            <p className="error-message">
                                All fields required! <IconX width={20} height={20} />
                            </p>

                            <p className="booking-done">
                                Check your email to confirm an order.{" "}
                                <IconX width={20} height={20} onClick={hideMessage} />
                            </p>

                            <form className="box-form">
                                <div className="box-form__bike-type">
                                    <label>
                                        <IconBike className="input-icon" /> &nbsp; Select Your Bike
                                        Type <b>*</b>
                                    </label>
                                    <select value={bikeType} onChange={handleBike}>
                                        <option>Select your bike type</option>
                                        <option value="Bianchi Aria">Bianchi Aria</option>
                                        <option value="Cannondale Synapse">Cannondale Synapse</option>
                                        <option value="Ribble Ultra SL">Ribble Ultra SL</option>
                                        <option value="BMC Timemachine">BMC Timemachine</option>
                                        <option value="Specialized Roubaix">Specialized Roubaix</option>
                                        <option value="Vitus Zenium">Vitus Zenium</option>
                                    </select>
                                </div>

                                <div className="box-form__bike-type">
                                    <label>
                                        <IconMapPinFilled className="input-icon" /> &nbsp; Pick-up{" "}
                                        <b>*</b>
                                    </label>
                                    <select value={pickUp} onChange={handlePick}>
                                        <option>Select pick up location</option>
                                        <option>Nairobi</option>
                                        <option>Thika</option>
                                        <option>Eldoret</option>
                                        <option>Nakuru</option>
                                        <option>Ngong</option>
                                    </select>
                                </div>

                                <div className="box-form__bike-type">
                                    <label>
                                        <IconMapPinFilled className="input-icon" /> &nbsp; Drop-of{" "}
                                        <b>*</b>
                                    </label>
                                    <select value={dropOff} onChange={handleDrop}>
                                        <option>Select drop off location</option>
                                        <option>Nairobi</option>
                                        <option>Thika</option>
                                        <option>Eldoret</option>
                                        <option>Nakuru</option>
                                        <option>Ngong</option>
                                    </select>
                                </div>

                                <div className="box-form__bike-time">
                                    <label htmlFor="picktime">
                                        <IconCalendarEvent className="input-icon" /> &nbsp; Pick-up{" "}
                                        <b>*</b>
                                    </label>
                                    <input
                                        id="picktime"
                                        value={pickTime}
                                        onChange={handlePickTime}
                                        type="date"
                                    ></input>
                                </div>

                                <div className="box-form__bike-time">
                                    <label htmlFor="droptime">
                                        <IconCalendarEvent className="input-icon" /> &nbsp; Drop-of{" "}
                                        <b>*</b>
                                    </label>
                                    <input
                                        id="droptime"
                                        value={dropTime}
                                        onChange={handleDropTime}
                                        type="date"
                                    ></input>
                                </div>

                                <button onClick={openModal} type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* modal ------------------------------------ */}

            <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
                {/* title */}
                <div className="booking-modal__title">
                    <h2>Complete Reservation</h2>
                    <IconX onClick={openModal} />
                </div>
                {/* message */}
                <div className="booking-modal__message">
                    <h4>
                        <IconInfoCircleFilled /> Upon completing this reservation enquiry,
                        you will receive:
                    </h4>
                    <p>
                        Your rental voucher to produce on arrival at the rental desk and a
                        toll-free customer support number.
                    </p>
                </div>
                {/* bike info */}
                <div className="booking-modal__bike-info">
                    <div className="dates-div">
                        <div className="booking-modal__bike-info__dates">
                            <h5>Location & Date</h5>
                            <span>
                                <IconMapPinFilled />
                                <div>
                                    <h6>Pick-Up Date & Time</h6>
                                    <p>
                                        {pickTime} /{" "}
                                        <input type="time" className="input-time"></input>
                                    </p>
                                </div>
                            </span>
                        </div>

                        <div className="booking-modal__bike-info__dates">
                            <span>
                                <IconMapPinFilled />
                                <div>
                                    <h6>Drop-Off Date & Time</h6>
                                    <p>
                                        {dropTime} /{" "}
                                        <input type="time" className="input-time"></input>
                                    </p>
                                </div>
                            </span>
                        </div>

                        <div className="booking-modal__bike-info__dates">
                            <span>
                                <IconMapPinFilled />
                                <div>
                                    <h6>Pick-Up Location</h6>
                                    <p>{pickUp}</p>
                                </div>
                            </span>
                        </div>

                        <div className="booking-modal__bike-info__dates">
                            <span>
                                <IconMapPinFilled />
                                <div>
                                    <h6>Drop-Off Location</h6>
                                    <p>{dropOff}</p>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="booking-modal__bike-info__model">
                        <h5>
                            <span> -</span> {bikeType}
                        </h5>
                        {imgUrl && <img src={imgUrl} alt="bike_img" />}
                    </div>
                </div>
                {/* personal info */}
                <div className="booking-modal__person-info">
                    <h4>Personal Information</h4>
                    <form className="info-form">
                        <div className="info-form__2col">
                            <span>
                                <label>
                                    First Name <b>*</b>
                                </label>
                                <input
                                    value={name}
                                    onChange={handleName}
                                    type="text"
                                    placeholder="Enter your first name"
                                ></input>
                                <p className="error-modal">This field is required.</p>
                            </span>

                            <span>
                                <label>
                                    Last Name <b>*</b>
                                </label>
                                <input
                                    value={lastName}
                                    onChange={handleLastName}
                                    type="text"
                                    placeholder="Enter your last name"
                                ></input>
                                <p className="error-modal ">This field is required.</p>
                            </span>

                            <span>
                                <label>
                                    Phone Number <b>*</b>
                                </label>
                                <input
                                    value={phone}
                                    onChange={handlePhone}
                                    type="tel"
                                    placeholder="Enter your phone number"
                                ></input>
                                <p className="error-modal">This field is required.</p>
                            </span>

                            <span>
                                <label>
                                    Age <b>*</b>
                                </label>
                                <input
                                    value={age}
                                    onChange={handleAge}
                                    type="number"
                                    placeholder="18"
                                ></input>
                                <p className="error-modal ">This field is required.</p>
                            </span>
                        </div>

                        <div className="info-form__1col">
                            <span>
                                <label>
                                    Email <b>*</b>
                                </label>
                                <input
                                    value={email}
                                    onChange={handleEmail}
                                    type="email"
                                    placeholder="Enter your email address"
                                ></input>
                                <p className="error-modal">This field is required.</p>
                            </span>

                            <span>
                                <label>
                                    Address <b>*</b>
                                </label>
                                <input
                                    value={address}
                                    onChange={handleAddress}
                                    type="text"
                                    placeholder="Enter your street address"
                                ></input>
                                <p className="error-modal ">This field is required.</p>
                            </span>
                        </div>

                        <div className="info-form__2col">
                            <span>
                                <label>
                                    City <b>*</b>
                                </label>
                                <input
                                    value={city}
                                    onChange={handleCity}
                                    type="text"
                                    placeholder="Enter your city"
                                ></input>
                                <p className="error-modal">This field is required.</p>
                            </span>

                            <span>
                                <label>
                                    Zip Code <b>*</b>
                                </label>
                                <input
                                    value={zipcode}
                                    onChange={handleZip}
                                    type="text"
                                    placeholder="Enter your zip code"
                                ></input>
                                <p className="error-modal ">This field is required.</p>
                            </span>
                        </div>

                        <span className="info-form__checkbox">
                            <input type="checkbox"></input>
                            <p>Please send me latest news and updates</p>
                        </span>

                        <div className="reserve-button">
                            <button onClick={confirmBooking}>Reserve Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default BookBike;