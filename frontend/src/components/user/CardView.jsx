import React, { useEffect, useState } from "react";
import axios from "axios";
import Spiner from "../spinner/Spiner";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const CardView = () => {
  let count = 1;
  const [view, setView] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = (e, id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/api/v1/user/${id}`)
      .then((data) => {
        console.log(data.data.message);
        toast.success(data.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        const del = data.data.user.filter((item) => id !== item.id);
        setView(del);
      })
      .catch((err) => {
        toast.error(err, {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log(err);
      });
  };

  useEffect(() => {
    setIsLoading(false);
    axios
      .get("http://localhost:5000/api/v1/list")
      .then((data) => {
        console.log(data.data.user);
        setView(data.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Subject</th>
              <th scope="col">Message</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {view.map((data) => (
              <tr>
                <th scope="row">{count++}</th>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.subject}</td>
                <td>{data.message}</td>
                <td>
                  <Link to="/update">
                    <button className="btn btn-primary ">Edit</button>
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={(e) => handleDelete(e, data._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default CardView;
