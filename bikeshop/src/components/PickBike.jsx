import { useState } from "react";
import BikeBox from "./BikeBox";
import { BIKE_DATA } from "./BikeData";

function PickBike() {
  const [active, setActive] = useState("SecondBike");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Bicycle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing bikes to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="pick-container__bike-content">
              {/* pick bike */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondBike");
                    btnID("btn1");
                  }}
                >
                  Carrera Zelos
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstBike");
                    btnID("btn2");
                  }}
                >
                  Cannondale Synapse
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdBike");
                    btnID("btn3");
                  }}
                >
                  Ribble Ultra SL
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthBike");
                    btnID("btn4");
                  }}
                >
                  BMC Timemachine
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthBike");
                    btnID("btn5");
                  }}
                >
                  Specialized Roubaix
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthBike");
                    btnID("btn6");
                  }}
                >
                  Vitus Zenium
                </button>
              </div>

              {active === "FirstBike" && <BikeBox data={BIKE_DATA} bikeID={0} />}
              {active === "SecondBike" && <BikeBox data={BIKE_DATA} bikeID={1} />}
              {active === "ThirdBike" && <BikeBox data={BIKE_DATA} bikeID={2} />}
              {active === "FourthBike" && <BikeBox data={BIKE_DATA} bikeID={3} />}
              {active === "FifthBike" && <BikeBox data={BIKE_DATA} bikeID={4} />}
              {active === "SixthBike" && <BikeBox data={BIKE_DATA} bikeID={5} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickBike;
