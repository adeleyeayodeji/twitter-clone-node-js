import React, { Component } from "react";
import $ from "jquery";
import "jquery.scrollbar";
import Feed from "../Feed/feed";
import { connect } from "react-redux";
import { AsideShowDeactive } from "../../components/Redux/actions";
/**
 * @author
 * @class AppBody
 **/

class AppBody extends Component {
  constructor() {
    super();
    this.state = {};
    //Bind
    this.handleProfile = this.handleProfile.bind(this);
  }
  //Handle back
  handleProfile() {
    this.props.history.push("/profile");
  }
  render() {
    $(document).ready(function () {
      $(".scrollbar-inner").scrollbar();
      $(".scrollbar-macosx").scrollbar();
    });
    let size1199;
    if (this.props.windowsWidth <= 500) {
      size1199 = "col-12 app_body";
    } else if (this.props.windowsWidth < 900) {
      size1199 = "col-10 app_body";
    } else if (this.props.windowsWidth < 1199) {
      size1199 = "col-7 app_body";
    } else if (this.props.windowsWidth > 1199) {
      size1199 = "col-6 app_body";
    }
    return (
      <div className={size1199}>
        {/* Sticky Header */}
        <div
          className="card p-2 sticky-top bg-white"
          style={{ display: "flow-root" }}
        >
          {this.props.windowsWidth <= 500 && (
            <div className="row no-gutters">
              <div className="col-2 text-center">
                <img
                  src="https://pbs.twimg.com/profile_images/1166186489375526912/fA0vk9Xs_200x200.jpg"
                  className="img-fluid rounded-circle userImageText"
                  alt="adeleye ayodeji"
                  style={{
                    height: this.props.windowsWidth < 900 ? "35px" : "50px",
                    width: this.props.windowsWidth < 900 ? "35px" : "50px"
                  }}
                  onClick={this.handleProfile}
                />
              </div>
              <div className="col-5">
                <h3
                  className="font-weight-bold float-left w-50"
                  style={{
                    fontFamily: "'Markazi Text', serif",
                    fontSize: "29px"
                  }}
                >
                  Home
                </h3>
              </div>
              <div className="col-5">
                <i
                  className="fa fa-star float-right w-50 text-right"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          )}

          {this.props.windowsWidth > 500 && (
            <div>
              <h3
                className="font-weight-bold float-left w-50"
                style={{
                  fontFamily: "'Markazi Text', serif",
                  fontSize: "29px"
                }}
              >
                Home
              </h3>
              <i
                className="fa fa-star float-right w-50 text-right"
                aria-hidden="true"
              ></i>
            </div>
          )}
        </div>
        {/* News Feed */}
        <Feed />
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
    AsideShowDeactive
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(AppBody);
