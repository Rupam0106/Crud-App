import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/add", data)
      .then((res) => {
        toast.success("Data Add Successfully !", {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log(res);
      })
      .catch((err) => {
        toast.error("Please Provide valid Input", {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log(err);
      });
  };

  return (
    <section className="mb-4">
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contact us
      </h2>

      <p className="text-center w-responsive mx-auto mb-5">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, ab iusto facilis veniam autem odio dolore doloremque reprehenderit unde qui. Laudantium hic,
      </p>

      <div className="row p-4 md-5">
        <div className="col-md-9 mb-md-0 mb-5">
          <form
            id="contact-form"
            name="contact-form"
            action="#"
            method="POST"
            className="mb-2"
            onSubmit={handleSubmit}
          >
            <div className="row ">
              <div className="col-md-6 p-2">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={data.name}
                    onChange={handleInput}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-md-6 p-2">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="form-control"
                    value={data.email}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 p-2">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    name="subject"
                    placeholder="subject"
                    className="form-control"
                    value={data.subject}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 p-2">
                <div className="md-form">
                  <textarea
                    type="text"
                    placeholder="Your Message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                    value={data.message}
                    onChange={handleInput}
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </form>

          <div className="text-center text-md-left">
            <Link className="btn btn-primary" onClick={handleSubmit}>
              Send
            </Link>
          </div>
          <div className="status"></div>
        </div>

        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <i className="fas fa-map-marker-alt fa-2x"></i>
              <p>Mohali, Panjab</p>
            </li>

            <li>
              <i className="fas fa-phone mt-4 fa-2x"></i>
              <p>+91 8460980143</p>
            </li>

            <li>
              <i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>rupam.gupta@rudrainnovative.com</p>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};

export default Contact;
