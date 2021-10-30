import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { handleGoogleSignIn, getEmail, getPassword, handleLogin } = useAuth();
  return (
    <div className="mt-5">
      <h3 className="mb-3">Please Login</h3>
      <div className="form py-5 shadow">
        <form onSubmit={handleLogin} className="w-100 ">
          <div className="mb-3 w-75 mx-auto ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onBlur={getEmail}
              type="email"
              className="form-control border-0 py-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 w-75 mx-auto ">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onBlur={getPassword}
              type="password"
              className="form-control border-0 py-2"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 mt-5 w-75 mx-auto ">
            <p>
              New for this site ? <Link to="/register">Register</Link>
            </p>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-75 mx-auto mb-3 py-2 d-block"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          type="submit"
          className="btn btn-primary w-75 mx-auto py-2 d-block"
        >
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
