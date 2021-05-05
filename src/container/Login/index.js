import React from "react";

/**
 * @author
 * @function Login
 **/

const Login = (props) => {
  return (
    <div className="container-fluid m-0 p-0">
      <div className="row no-gutters">
        <div className="col-6">
          <div className="loginleft">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/twitterlogo.png"}
            />
          </div>
        </div>
        <div className="col-6 ">
          <div className="row ">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label>Phone, Email or username</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter details"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Enter details"
                    />
                  </div>
                </div>
                <div className="col">
                  <button className="btn btn-primary rounded">Login</button>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
