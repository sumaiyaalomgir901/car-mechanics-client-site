import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./SingleService.css";

const SingleService = () => {
  const { Id } = useParams();
  const [serviceDetails, setServiceDetails] = useState({});
  useEffect(() => {
    fetch(`http://localhost:1003/services/${Id}`)
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  return (
    <div className="single-services shadow">
      <div className="single-services-image">
        <img
          className="shadow"
          src={serviceDetails.serviceImage}
          alt={serviceDetails.serviceName}
        />
        <h2 className="fs-4 text-uppercase mt-4">
          {serviceDetails.serviceName}
        </h2>
      </div>
      <div className="single-services-details">
        <h3 className="fs-4 fw-bold text-info">
          $ {serviceDetails.servicePrice}
        </h3>
        <p>{serviceDetails.serviceDescription}</p>
        <Link to={`/booking/${Id}`}>
          <button className="btn btn-outline-info mt-4 me-2">Book Now</button>
        </Link>

        <Link to="/services">
          <button className="btn btn-outline-info mt-4">Back to service</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleService;
