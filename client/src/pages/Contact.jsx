import { useState } from "react";
import contactImg from "../assets/contact.png";

const Contact = () => {
  //! States
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //! Submit Button
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      username,
      email,
      message,
    };
    console.log(data);
  };
  //! Clear Button
  const handleClear = () => {
    setUsername("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-3">
            <div className="wrap-register-img">
              <img src={contactImg} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-3">
            <h3 className="display-6 text-white fw-bold mb-3">Contact Now</h3>
            <form className="" onSubmit={handleSubmit}>
              <div className="form-floating mb-3 text-dark">
                <input
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  className="form-control"
                  id="floatingInput2"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput2">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <textarea
                  autoComplete="off"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="6"
                  required
                  type="text"
                  className="form-control h-100"
                  id="floatingPassword4"
                  placeholder="Enter Msg Here"
                ></textarea>
                <label htmlFor="floatingPassword4">Message</label>
              </div>
              <div className="wrap-btn">
                <button type="submit" className="myBTN me-2">
                  Submit
                </button>
                <button type="button" className="myBTN" onClick={handleClear}>
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
