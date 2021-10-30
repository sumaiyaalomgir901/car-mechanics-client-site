import React from "react";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div>
      <h1>booking page</h1>
      <Link to="/services">
        <button className="btn btn-outline-info mt-4">Back to service</button>
      </Link>
    </div>
  );
};

export default Booking;
