import time1 from "../assets/time2.png";

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
      <section className="second-section text-light">
        <div className="container wrap-data">
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
      </section>
    </>
  );
};

export default Home;
