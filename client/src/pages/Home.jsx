import time1 from "../assets/time2.png";
import time2 from "../assets/time3.png";
import time3 from "../assets/time1.png";

const Home = () => {
  return (
    <>
      <section className="first-section text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="wrap-home-sec-one">
                <p className="text-light fw-bold mb-0 home-hero-text">
                  We Are Making best MERN Porject 2024
                </p>
                <h1 className="home-welcome">Welcome to TimeTraveller</h1>
                <div className="home-para text-muted">
                  Explore the rich tapestry of history with TimeTraveller. Our
                  mission is to bring the past to life, allowing you to witness
                  and experience the wonders of different eras. Whether you're
                  fascinated by ancient civilizations, medieval kingdoms, or the
                  elegance of bygone centuries, TimeTraveller is your gateway to
                  an extraordinary adventure through time.
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="wrap-home-img">
                <img src={time1} alt="time1" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="second-section text-light mb-4">
        <div className="container">
          <div className="wrap-data">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <div className="row">
                  <div className="col-12">
                    <div className="text-center number-title">50+</div>
                  </div>
                  <div className="col-12">
                    <div className="text-center number-para">
                      Registered Companies
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <div className="row">
                  <div className="col-12">
                    <div className="text-center number-title">100+</div>
                  </div>
                  <div className="col-12">
                    <div className="text-center number-para">Happy Clients</div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <div className="row">
                  <div className="col-12">
                    <div className="text-center number-title">10+</div>
                  </div>
                  <div className="col-12">
                    <div className="text-center number-para">
                      Well Know Developer
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <div className="row">
                  <div className="col-12">
                    <div className="text-center number-title">24/7</div>
                  </div>
                  <div className="col-12">
                    <div className="text-center number-para">Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="third-section text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="wrap-home-img">
                <img src={time2} alt="time1" className="img-fluid" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="wrap-home-sec-one">
                <h1 className="home-welcome">Why we here?</h1>
                <div className="home-para text-muted">
                  <p>
                    Embark on a captivating journey through the annals of time
                    with TimeTraveller. We invite you to explore the rich
                    tapestry of history, unlocking the secrets and wonders of
                    different eras. Immerse yourself in the grandeur of ancient
                    civilizations, witness the majesty of medieval kingdoms, and
                    experience the charm of bygone centuries.
                  </p>
                  <p>
                    At TimeTraveller, we believe that history is not just a
                    story written in books; it's an immersive adventure waiting
                    to be discovered. Our expertly curated time travel
                    experiences offer a unique blend of education and
                    entertainment, allowing you to witness historical events,
                    visit iconic destinations, and truly engage with the past.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="forth-section text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="wrap-home-sec-one">
                <h1 className="home-welcome">Features</h1>
                <div className="home-para text-muted">
                  <p>
                    As a developer working on a MERN stack (MongoDB, Express.js,
                    React, Node.js) app named "TimeTraveller," there are
                    numerous features and functionalities you can implement to
                    make your app engaging and educational. Below are some
                    ideas: Provide a feature for users to track their historical
                    knowledge progress or completed time travel experiences.
                  </p>
                  <p>
                    Remember to continuously gather feedback from users to
                    improve and enhance your app over time. The key is to create
                    an engaging and informative platform that sparks the
                    curiosity of history enthusiasts and learners. Implement
                    responsive font sizes and a visually appealing design for an
                    optimal user experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="wrap-home-img">
                <img src={time3} alt="time1" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
