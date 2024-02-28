import { IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
// import Testimonials from "../components/Testimonials";

function TestimonialsPage() {
    return (
        <>
            <section className="testimonials-page">
                <HeroPages name="Testimonials" />
                {/* <Testimonials /> */}
                <div className="book-banner">
                    <div className="book-banner__overlay"></div>
                    <div className="container">
                        <div className="text-content">
                            <h2>Rent a bike by getting in touch with us</h2>
                            <span>
                                <IconPhone width={40} height={40} />
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

export default TestimonialsPage;