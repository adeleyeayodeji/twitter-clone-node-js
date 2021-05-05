import React, { Component } from "react";
import { Link, matchPath, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import $ from "jquery";
import {
  AsideShowDeactive,
  AsideShowActive,
  windowsSize,
  profileActive
} from "../../components/Redux/actions";
import "jquery.scrollbar";

/**
 * @author
 * @class AppNav
 **/

class AppNav extends Component {
  //Constructor
  constructor() {
    super();
    this.state = {
      linkcss: "nav-link link-hover"
    };
    this.handleHome = this.handleHome.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.profilePageUrlCheck = this.profilePageUrlCheck.bind(this);
  }
  //get before componet load
  UNSAFE_componentWillMount() {
    this.profilePageUrlCheck();
  }

  componentDidUpdate() {
    this.profilePageUrlCheck();
  }

  profilePageUrlCheck() {
    //Check for profile page
    let profilepage_path = "/profile";
    let profielpath = matchPath(this.props.location.pathname, {
      path: profilepage_path,
      exact: true,
      strict: false
    });
    if (profielpath != null) {
      this.props.profileActive("Ptrue");
      // console.log(true);
    } else {
      this.props.profileActive("Pfalse");
      // console.log(false);
    }
  }

  //Handle back
  handleHome() {
    this.props.history.push("/");
  }
  //Handle back
  handleUrl(url) {
    this.props.history.push(url);
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
    let newurl = response != null ? " link-active" : "";
    return newurl;
  }
  checkWidth() {
    var width = $(window).width();
    return width;
  }

  render() {
    $(window).resize(() => {
      this.props.windowsSize("change", $(window).width());
    });
    $(document).ready(function () {
      // Modal metthod
      $("#modelId").on("show.bs.modal", (event) => {
        var button = $(event.relatedTarget);
        var modal = $(this);
        //Update the input height
        let first = $(".editor_modal").first();
        first[0].style.height = "180px";
      });
      //Smooth scrolling
      $(".scrollbar-macosx").scrollbar();
      //popover Method
      $(".popover_btn").popover({
        html: true,
        content: function () {
          return $("#popover_content_wrapper").html();
        }
      });

      $(".editor_modal > .editor_modal").focusout(function () {
        var element = $(this);
        if (!element.text().trim().length) {
          element.html("");
          element.empty();
          $(element).height("180px");
        }
      });
      $(".editor_modal > .editor_modal").keyup(function () {
        var element = $(this);
        if (!element.text().trim().length) {
          element.html("");
          $(".twitter_custom").css({
            background: "#00aced7a",
            cursor: "not-allowed"
          });
          element.empty();
          $(element).height("180px");
        } else {
          $(".twitter_custom").css({
            background: "#00aced",
            cursor: "pointer"
          });
        }
      });
    });
    //resize
    let size1199;
    if (this.props.windowsWidth <= 500) {
      size1199 = "d-none col-2 app_nav";
    } else if (this.props.windowsWidth < 900) {
      size1199 = "col-2 app_nav";
    } else if (this.props.windowsWidth < 1199) {
      size1199 = "col-1 app_nav";
    } else if (this.props.windowsWidth > 1199) {
      size1199 = "col-3 app_nav";
    }
    return (
      <div className={size1199}>
        <div
          className={
            this.props.windowsWidth < 1199 ? "header ml-1" : "header ml-5"
          }
          onClick={this.handleHome}
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/images/twitterlogo.png"}
            className="img-fluid rounded-circle mb-2 ml-2 mt-2 logo-hover"
            alt="Logo"
          />
        </div>
        <ul className="nav flex-column">
          <li
            className={
              this.props.windowsWidth < 1199
                ? "nav-item mb-1 ml-0"
                : "nav-item mb-3 ml-5"
            }
            onClick={() => this.props.AsideShowDeactive()}
          >
            <Link
              className={this.state.linkcss + this.matchpath("/")}
              to="/"
              style={{
                width: this.props.windowsWidth < 1199 ? "73px" : "189px"
              }}
            >
              <h5 className="font-weight-bold mb-0 navtitle">
                <i className="fa fa-home pr-2" aria-hidden="true"></i>
                {this.props.windowsWidth < 1199 ? "" : " Home"}
              </h5>
            </Link>
          </li>
          <li
            className={
              this.props.windowsWidth < 1199
                ? "nav-item mb-1 ml-0"
                : "nav-item mb-3 ml-5"
            }
            onClick={() => this.props.AsideShowActive()}
          >
            <Link
              className={this.state.linkcss + this.matchpath("/explore")}
              to="/explore"
              style={{
                width: this.props.windowsWidth < 1199 ? "73px" : "189px"
              }}
            >
              <h5 className="font-weight-bold mb-0 navtitle">
                <i className="fa fa-hashtag pr-2" aria-hidden="true"></i>
                {this.props.windowsWidth < 1199 ? "" : " Explore"}
              </h5>
            </Link>
          </li>
          <li
            className={
              this.props.windowsWidth < 1199
                ? "nav-item mb-1 ml-0"
                : "nav-item mb-3 ml-5"
            }
            onClick={() => this.props.AsideShowDeactive()}
          >
            <Link
              className={this.state.linkcss + this.matchpath("/notification")}
              to="/notification"
              style={{
                width: this.props.windowsWidth < 1199 ? "73px" : "189px"
              }}
            >
              <h5 className="font-weight-bold mb-0 navtitle">
                <i className="fa fa-bell pr-2" aria-hidden="true"></i>
                {this.props.windowsWidth < 1199 ? "" : " Notifications"}
              </h5>
            </Link>
          </li>
          <li
            className={
              this.props.windowsWidth < 1199
                ? "nav-item mb-1 ml-0"
                : "nav-item mb-3 ml-5"
            }
            onClick={() => this.props.AsideShowDeactive()}
          >
            <Link
              className={this.state.linkcss + this.matchpath("/messages")}
              to="#"
              style={{
                width: this.props.windowsWidth < 1199 ? "73px" : "189px"
              }}
            >
              <h5 className="font-weight-bold mb-0 navtitle">
                <i className="fas fa-envelope pr-2" aria-hidden="true"></i>
                {this.props.windowsWidth < 1199 ? "" : " Messages"}
              </h5>
            </Link>
          </li>
          <li
            className={
              this.props.windowsWidth < 1199
                ? "nav-item mb-1 ml-0"
                : "nav-item mb-3 ml-5"
            }
            onClick={() => this.props.AsideShowDeactive()}
          >
            <Link
              className={this.state.linkcss + this.matchpath("/profile")}
              to="/profile"
              style={{
                width: this.props.windowsWidth < 1199 ? "73px" : "189px"
              }}
            >
              <h5 className="font-weight-bold mb-0 navtitle">
                <i className="fa fa-user pr-2" aria-hidden="true"></i>
                {this.props.windowsWidth < 1199 ? "" : " Profile"}
              </h5>
            </Link>
          </li>
          <li
            className={
              this.props.windowsWidth < 1199
                ? "nav-item mb-1 ml-0"
                : "nav-item mb-3 ml-5"
            }
            onClick={() => this.props.AsideShowDeactive()}
          >
            <Link
              className={this.state.linkcss + " popover_btn"}
              to="#"
              role="button"
              data-toggle="popover"
              data-trigger="focus"
              title="Settings"
              tabIndex="0"
              data-placement="top"
              style={{
                width: this.props.windowsWidth < 1199 ? "73px" : "189px",
                outline: "none"
              }}
            >
              <h5 className="font-weight-bold mb-0 navtitle">
                <i className="fas fa-bars pr-2" aria-hidden="true"></i>
                {this.props.windowsWidth < 1199 ? "" : " More"}
              </h5>
            </Link>
          </li>
          <li
            className={
              this.props.windowsWidth < 1199
                ? "nav-item mb-1 ml-0"
                : "nav-item mb-3 ml-5"
            }
          >
            <Link
              className={
                this.props.windowsWidth < 1199
                  ? "twitter_btnSmall btn text-white"
                  : "twitter_btn btn w-75 text-white"
              }
              data-toggle="modal"
              data-target="#modelId"
              style={
                this.props.windowsWidth < 1199
                  ? {
                      height: "auto",
                      padding: "3px",
                      marginLeft: "10px"
                    }
                  : {
                      height: "50px",
                      paddingTop: "10px",
                      fontSize: "16px"
                    }
              }
              to="#"
            >
              {this.props.windowsWidth < 1199 ? (
                <i
                  className="fab fa-twitter"
                  style={{
                    fontSize: this.props.windowsWidth < 900 ? "20px" : "30px"
                  }}
                ></i>
              ) : (
                "Tweet"
              )}
            </Link>
          </li>
        </ul>

        {/* popover content */}
        <div id="popover_content_wrapper" style={{ display: "none" }}>
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Change password</li>
              <li className="list-group-item">Profile Settings</li>
              <li className="list-group-item">Contact Administrator</li>
            </ul>
          </div>
        </div>
        {/* popover content ends here */}
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div
                  style={{
                    borderBottom: "1px solid lightgrey"
                  }}
                  className="h5"
                >
                  <i
                    className="fas fa-times pb-3"
                    data-dismiss="modal"
                    style={{
                      fontSize: "22px",
                      color: "#00aced",
                      cursor: "pointer"
                    }}
                  ></i>
                </div>

                <div className="container-fluid">
                  <div className="row no-gutters">
                    <div className="col-2 text-left p-0 m-0">
                      <img
                        src="https://picsum.photos/720/1080"
                        className="img-fluid rounded-circle ml-3"
                        alt="adeleye ayodeji"
                        style={{
                          height: "67px",
                          width: "67px"
                        }}
                      />
                    </div>
                    <div className="col-10">
                      <div
                        style={{
                          cursor: "text",
                          height: "180px"
                        }}
                        className="editor_modal mt-1 scrollbar-macosx"
                        contentEditable="true"
                        placeholder="Whats happening?"
                      ></div>
                      <div
                        className="row m-1 mt-2 pt-1 no-gutters"
                        style={{
                          borderTop: "0.1em solid #e6ecf0",
                          borderWidth: "2px"
                        }}
                      >
                        <div className="col-10">
                          <div className="row no-gutters">
                            <div className="col-1">
                              <i
                                className="fas fa-image"
                                aria-hidden="true"
                                style={{
                                  color: "#1DA1F2",
                                  fontSize: "large"
                                }}
                              ></i>
                            </div>
                            <div className="col">
                              <i
                                className="far fa-laugh"
                                aria-hidden="true"
                                style={{
                                  color: "#1DA1F2",
                                  fontSize: "large"
                                }}
                              ></i>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-2 twitter_btn twitter_custom"
                          style={{
                            background: "#00aced7a",
                            cursor: "not-allowed"
                          }}
                        >
                          Tweet
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        {this.props.windowsWidth >= 1435 && (
          <div
            className="row no-gutters profileSticky"
            style={{
              width: "74%",
              margin: "0px auto",
              position: "absolute",
              bottom: "21px",
              marginLeft: "27px",
              padding: "10px",
              cursor: "pointer"
            }}
          >
            <div className="col-2 p-0 m-0 text-center">
              <img
                src={
                  "https://pbs.twimg.com/profile_images/1166186489375526912/fA0vk9Xs_200x200.jpg"
                }
                className="img-fluid rounded-circle userImage"
                alt="adeleye ayodeji"
                onClick={() => this.handleUrl("/profile")}
              />
            </div>
            <div className="col-8 pl-2">
              <p
                className="p-0 font-weight-bold"
                style={{ marginBottom: "-9px" }}
              >
                Adeleye Ayodeji
              </p>
              <span className="text-muted small">@adeleyeayodeji_</span>
            </div>
            <div className="col-2">
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
            </div>
          </div>
        )}
      </div>
    );
  }
}

//Maping to state to props
const mapStateToProps = (state) => {
  return {
    log: state.asideShow,
    windowsWidth: state.windowsWidth
  };
};

//Mapping Dispatch To props
const mapDispatchToProps = () => {
  return {
    AsideShowDeactive,
    AsideShowActive,
    windowsSize,
    profileActive
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(withRouter(AppNav));
