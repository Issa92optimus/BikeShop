import { IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/1.png";
import Person2 from "../images/team/2.png";
import Person3 from "../images/team/3.png";
import Person4 from "../images/team/4.png";
import Person5 from "../images/team/5.png";
import Person6 from "../images/team/6.png";

function Team() {
    const teamPpl = [
        { img: Person1, name: "Ramadhan Masha", job: "Salesman" },
        { img: Person2, name: "Adam Zero", job: "Business owner" },
        { img: Person3, name: "Masha Ramah", job: "Photographer" },
        { img: Person4, name: "Yenna Ortega", job: "Car Detailist" },
        { img: Person5, name: "Christiano Yonaldo", job: "Mechanic" },
        { img: Person6, name: "Issa Changawa", job: "Manager" },

    ];
    return (
        <>
            <section className="team-page">
                <HeroPages name="Our Team" />
                <div className="container">
                    <div className="team-container">
                        {teamPpl.map((ppl, id) => (
                            <div key={id} className="team-container_box">
                            <div className="team-container_box_img-div">
                                <img src={ppl.img} alt="team_img" />
                            </div>
                            <div className="team-container_box_descr">
                                    <h3>{ppl.name}</h3>
                                    <p>{ppl.job}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Team;

