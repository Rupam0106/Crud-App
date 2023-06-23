import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate=useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    subject:"",
    message:""
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/add", data)
      .then((res) => {
        toast.success("User Register Successfully !", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/login")
        console.log(res);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log(err);
      });
  };

  return (
    <section className="vh-30" style={{ backgroundColor: "#508bfc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong">
              <form
                className="card-body p-5 text-center"
                onSubmit={handleSubmit}
              >
                <h3 className="mb-5">Register</h3>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="typeNameX-2"
                    name="name"
                    placeholder="Enter Name"
                    value={data.name}
                    onChange={handleInput}
                    className="form-control form-control-lg"
                    
                  />
                  <label className="form-label" htmlFor="typeNameX-2">
                    Name
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    name="email"
                    placeholder="Enter Email"
                    value={data.email}
                    onChange={handleInput}
                    className="form-control form-control-lg"
                    
                  />
                  <label className="form-label" htmlFor="typeEmailX-2">
                    Email
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    name="password"
                    placeholder="Enter Password"
                    value={data.password}
                    onChange={handleInput}
                    className="form-control form-control-lg"
                    
                  />
                  <label className="form-label" htmlFor="typePasswordX-2">
                    Password
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="typeSubjectX-2"
                    name="subject"
                    placeholder="Enter Subject"
                    value={data.subject}
                    onChange={handleInput}
                    className="form-control form-control-lg"
                    
                  />
                  <label className="form-label" htmlFor="typeSubjectX-2">
                    Subject
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="typeMessageX-2"
                    name="message"
                    placeholder="Enter Message"
                    value={data.message}
                    onChange={handleInput}
                    className="form-control form-control-lg"
                   
                  />
                  <label className="form-label" htmlFor="typeMessageX-2">
                    Message
                  </label>
                </div>

                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Register
                </button>
                <p className="mt-2">
                  Already have an Account <Link to="/login">Login</Link>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
