import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, matchPath, withRouter } from "react-router-dom";
import Login from "../Login";
class RootContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkcss: "nav-link link-hover",
      login: false
    };
    //Bind
    this.handleHome = this.handleHome.bind(this);
    this.checkLogin = this.checkLogin.bind(this);

    //Run Code
    this.checkLogin();
  }
  //Handle back
  handleHome() {
    this.props.history.push("/");
  }
  //Check if login page is active
  checkLogin() {
    //Check for profile page
    let profilepage_path = "/login";
    let profielpath = matchPath(this.props.location.pathname, {
      path: profilepage_path,
      exact: true,
      strict: false
    });
    if (profielpath != null) {
      this.state.login = true;
      // console.log(true);
    } else {
      this.state.login = false;
      // console.log(false);
    }
  }
  //Match URL Method
  matchpath(path) {
    // console.log(path);
    let response = matchPath(this.props.location.pathname, {
      path: path,
      exact: true,
      strict: false
    });
    //Return response
    let newurl = response != null ? " link-active-mobile" : "";
    return newurl;
  }
  render() {
    let rootClass;
    let morePadding;
    if (this.state.login == true) {
      rootClass = "container-fluid";
      morePadding = {
        padding: "0px"
      };
    } else {
      rootClass =
        this.props.widthSize < 1199 ? "container-fluid size" : "container size";
      morePadding = {
        padding: this.props.widthSize <= 500 ? "0px" : "0 20px"
      };
    }

    return (
      <div className={rootClass} id="rootContainer" style={morePadding}>
        {this.state.login == true ? <Login /> : this.props.children}
        {/* For Mobile Only */}
        {this.props.widthSize <= 500 && (
          <React.Fragment>
            <Link
              className="float"
              to="#"
              onClick={() => alert("Not Active Yet")}
            >
              <i
                className="fab fa-twitter my-float"
                style={{
                  fontSize: "20px"
                }}
              ></i>
            </Link>

            <footer className="card p-1 bg-white footer">
              <div className="row no-gutters">
                <div className="col-3 text-center">
                  <Link
                    className={this.state.linkcss + this.matchpath("/")}
                    to="/"
                    style={{
                      width: "100%"
                    }}
                  >
                    <h5 className="navtitle">
                      <i className="fas fa-home" aria-hidden="true"></i>
                    </h5>
                  </Link>
                </div>
                <div className="col-3 text-center">
                  <Link
                    className={this.state.linkcss + this.matchpath("/explore")}
                    to="/explore"
                    style={{
                      width: "100%"
                    }}
                  >
                    <h5 className="navtitle">
                      <i className="fa fa-hashtag" aria-hidden="true"></i>
                    </h5>
                  </Link>
                </div>
                <div className="col-3 text-center">
                  <Link
                    className={
                      this.state.linkcss + this.matchpath("/notification")
                    }
                    to="/notification"
                    style={{
                      width: "100%"
                    }}
                  >
                    <h5 className="navtitle">
                      <i className="fa fa-bell" aria-hidden="true"></i>
                    </h5>
                  </Link>
                </div>
                <div className="col-3 text-center">
                  <Link
                    className={this.state.linkcss + this.matchpath("/messages")}
                    to="#"
                    style={{
                      width: "100%"
                    }}
                    onClick={() => alert("Not Active Yet")}
                  >
                    <h5 className="navtitle">
                      <i className="fas fa-envelope" aria-hidden="true"></i>
                    </h5>
                  </Link>
                </div>
              </div>
            </footer>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    widthSize: state.windowsWidth
  };
};

const mapDispatchToProps = () => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(withRouter(RootContainer));
