import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { serviceName, serviceDescription, serviceImage, servicePrice, _id } =
    service;
  return (
    <div className="service  rounded shadow">
      <img className="rounded" src={serviceImage} alt={serviceName} />
      <div className="detail">
        <h2 className="fs-5 text-uppercase">{serviceName}</h2>
        <p className="text-muted">{serviceDescription.slice(0, 200)}</p>
        <h4 className="fs-5 fw-bold text-info">$ {servicePrice}</h4>
        <Link to={`/service/${_id}`}>
          <button className="fs-6 fw-light mt-4 me-2 btn btn-outline-info">
            Read Details
          </button>
        </Link>
        <Link to={`/booking/${_id}`}>
          <button className="fs-6 fw-light btn btn-outline-info mt-4">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
