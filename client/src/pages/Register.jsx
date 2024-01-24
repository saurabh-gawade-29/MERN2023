import registerImg from "../assets/register.png";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-5">
            <div className="wrap-register-img">
              <img src={registerImg} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-5">
            <h3 className="display-6 text-white fw-bold mb-3">Register Now</h3>
            <form className="" onSubmit={handleSubmit}>
              <div className="form-floating mb-3 text-dark">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="floatingInput1"
                  placeholder="Enter Username"
                />
                <label htmlFor="floatingInput1">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  type="email"
                  className="form-control"
                  id="floatingInput2"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput2">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  type="number"
                  className="form-control"
                  id="floatingPassword3"
                  placeholder="8412345678"
                />
                <label htmlFor="floatingPassword3">Mobile</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  type="password"
                  className="form-control"
                  id="floatingPassword4"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword4">Password</label>
              </div>
              <button type="submit" className="myBTN">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
