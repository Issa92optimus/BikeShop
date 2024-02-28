import PlanTrip from "../components/PlanTrip";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Banner from "../components/Banner";
import BookBike from "../components/BookBike";
import Hero from "../components/Hero";
import PickBike from "../components/PickBike";

function Home() {
    return(
        <>
            <PlanTrip />
            <Footer />
            <Hero />
            <Testimonials />
            <Banner />
            <BookBike />
            <PickBike />
        </>
    );
}

export default Home;