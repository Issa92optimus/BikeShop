import PlanTrip from "../components/PlanTrip";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Banner from "../components/Banner";
import BookBike from "../components/BookBike";
import Hero from "../components/Hero";

function Home() {
    return(
        <>
            <PlanTrip />
            <Footer />
            <Hero />
            <Testimonials />
            <Banner />
            <BookBike />
        </>
    );
}

export default Home;