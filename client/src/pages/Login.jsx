import loginImg from "../assets/login.png";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-3">
            <div className="wrap-register-img">
              <img src={loginImg} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-3">
            <h3 className="display-6 text-white fw-bold mb-3">Login Now</h3>
            <form className="" onSubmit={handleSubmit}>
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
                  type="password"
                  className="form-control"
                  id="floatingPassword4"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword4">Password</label>
              </div>
              <button type="submit" className="myBTN">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
