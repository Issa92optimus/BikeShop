import { IconMail, IconPhoneCall } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
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
                <a
                  href="mailto: issanyale446@gmail.com">
                  <IconMail />
                  &nbsp; issanyale446@gmail.com
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

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="https://www.nationsonline.org/oneworld/map/kenya_map2.htm">Kenya</a>
              </li>
              <li>
                <a href="https://ke.linkedin.com/jobs/software-engineer-jobs?position=1&pageNum=0">Careers</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">How we work</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 5:00PM</li>
              <li>Sat: 9:00AM - 4:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            {/* <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul> */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
