import { useState } from "react";

function BikeBox({ data, bikeID }) {
  const [bikeLoad, setBikeLoad] = useState(true);
  return (
    <>
      {data[bikeID].map((bike, id) => (
        <div key={id} className="box-bike">
          {/* bike */}
          <div className="pick-bike">
            {bikeLoad && <span className="loader"></span>}
            <img
              style={{ display: bikeLoad ? "none" : "block" }}
              src={bike.img}
              alt="bike_img"
              onLoad={() => setBikeLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>${bike.price}</span>/ rent per day
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Model</span>
                <span>{bike.model}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Make</span>
                <span>{bike.make}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Year</span>
                <span>{bike.year}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Gears</span>
                <span>{bike.gears}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Brakes</span>
                <span>{bike.brakes}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default BikeBox;
