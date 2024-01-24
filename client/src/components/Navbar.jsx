import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="mb-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <NavLink className="navbar-brand fw-bold navbarBrand" to="/">
              TIMETRAVELER
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* For Alignment of ul li */}
              <ul className="navbar-nav mb-2 mb-lg-0 w-100 d-flex justify-content-end">
                <li className="nav-item">
                  <NavLink to={"/"} className="nav-link" aria-current="page">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/about"} className="nav-link">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/service"} className="nav-link">
                    Service
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/contact"} className="nav-link">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/register"} className="nav-link">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/login"} className="nav-link">
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
