import React, { Component } from "react";
import { Link } from "react-router-dom";
import TweetsAndReplies from "../TweetsAndReplies/tweetsAndreplies";
import Tabs from "./../Tabs/tabs";
import $ from "jquery";
import "jquery.scrollbar";
import { connect } from "react-redux";
import { ShowProfileTabs } from "./../../components/Redux/actions/index";
import Media from "./../Media/media";
import Likes from "./../Likes/likes";

/**
 * @author
 * @class Profile
 **/

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      tabscss: "col text-center font-weight-bold tablink "
    };
    this.handleBack = this.handleBack.bind(this);
  }
  //Handle back
  handleBack() {
    this.props.history.goBack();
  }
  //Activate tabs state
  tabsChange(tab) {
    let tabNew = this.props.tabs;
    let tabactive = tab == tabNew ? "tabactive" : "";
    return tabactive;
  }
  render() {
    //Smooth scrolling
    $(function () {
      $(".scrollbar-inner").scrollbar();
    });
    //Resize
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
          className="card p-1 sticky-top"
          style={{
            display: this.props.modalOpen ? "contents" : "flow-root"
          }}
        >
          <div className="row no-gutters">
            <div className="col-1 pl-2">
              <h3
                className="font-weight-bold float-left w-50"
                onClick={this.handleBack}
              >
                <i
                  className="fas fa-arrow-left"
                  style={{ fontSize: "large" }}
                ></i>
              </h3>
            </div>
            <div
              className={
                this.props.windowsWidth <= 500 ? "col-11 pl-4" : "col-11 pl-3"
              }
            >
              <h5
                className="p-0 m-0 font-weight-bolder"
                style={{
                  fontFamily: "'Markazi Text', serif",
                  fontSize: "29px"
                }}
              >
                Adeleye Ayodeji
              </h5>
              <p className="p-0 m-0">243 Tweets</p>
            </div>
          </div>
        </div>

        {/* Container */}
        <div className="scrollbar-inner">
          <div className="card" style={{ height: "220px" }}>
            <img
              // src="https://picsum.photos/720/1080"
              src="https://pbs.twimg.com/profile_banners/751717621158948864/1585613464/600x200"
              draggable="true"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                objectPosition: "center"
              }}
            />
          </div>
          <div className="card">
            <div className="row no-gutters">
              <div className="col">
                <img
                  alt="Adeleye Ayodeji"
                  style={{
                    height: this.props.windowsWidth < 600 ? "134px" : "150px",
                    width: this.props.windowsWidth < 600 ? "134px" : "150px",
                    marginTop: "-75px",
                    marginLeft: "12px",
                    padding: "5px",
                    background: "white"
                  }}
                  draggable="true"
                  src="https://pbs.twimg.com/profile_images/1166186489375526912/fA0vk9Xs_200x200.jpg"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="col pr-3 pt-3">
                <Link
                  className="btn btn-outline-primary float-right font-weight-bold"
                  to="#"
                  style={{ borderRadius: "20px" }}
                >
                  Edit profile
                </Link>
              </div>
            </div>
            <div className="pl-2">
              <h4 className="p-0 mb-0 ml-2 font-weight-bolder">
                Adeleye Ayodeji
              </h4>
              <p className="p-0 mt-0 ml-2 mb-1 text-muted">@adeleyeayodeji_</p>
            </div>
            <div className="pl-2 mt-0">
              <p
                className="ml-2 w-75"
                style={{
                  fontFamily: "calibri",
                  fontSize: "larger"
                }}
              >
                Adeleye Ayodeji is a professional with a broad set of skills in
                software, web development, speaking among many other God-given
                talents.
              </p>
            </div>
            <div className="pl-2 mt-0">
              <div
                className="row no-gutters ml-2 w-100 text-muted"
                style={{
                  fontFamily: "calibri",
                  fontSize: "larger"
                }}
              >
                <div
                  className={this.props.windowsWidth < 600 ? "col-6" : "col-3"}
                >
                  <i className="pl-0 pr-1 fas fa-map-marker-alt"></i> Lagos.
                  Nigeria.
                </div>
                <div
                  className={this.props.windowsWidth < 600 ? "col-6" : "col-4"}
                >
                  <i className="pl-0 pr-1 fas fa-link"></i>
                  <Link
                    to={{
                      pathname: "https://adeleyeayodeji.com"
                    }}
                    target="_blank"
                  >
                    adeleyeayodeji.com
                  </Link>
                </div>
                <div
                  className={this.props.windowsWidth < 600 ? "col-12" : "col-5"}
                >
                  <i className="pl-0 pr-1 fas fa-calendar-week"></i> Born
                  December 20, 2020
                </div>
                <div className="col-12">
                  <i className="pl-0 pr-1 fas fa-calendar-alt"></i> Joined July
                  2016
                </div>
                <div className="col-12 text-dark mt-1">
                  <div className="row no-gutters">
                    <div
                      className={
                        this.props.windowsWidth < 600 ? "col-3" : "col-2"
                      }
                    >
                      <p>
                        <b>731</b> Following
                      </p>
                    </div>
                    <div
                      className={
                        this.props.windowsWidth < 600 ? "col-3" : "col-2"
                      }
                    >
                      <p>
                        <b>144</b> Followers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row no-gutters"
              style={{
                borderBottom: "1px solid rgba(0, 0, 0, 0.125)"
              }}
            >
              <div
                className={
                  this.state.tabscss + this.tabsChange("tweetandreplies")
                }
                style={{ padding: "20px" }}
                onClick={() => {
                  this.props.ShowProfileTabs("tweetandreplies");
                }}
              >
                Tweets
                {this.props.windowsWidth > 668 && " & replies"}
              </div>
              <div
                className={this.state.tabscss + this.tabsChange("media")}
                style={{ padding: "20px" }}
                onClick={() => {
                  this.props.ShowProfileTabs("media");
                }}
              >
                Media
              </div>
              <div
                className={this.state.tabscss + this.tabsChange("likes")}
                style={{ padding: "20px" }}
                onClick={() => {
                  this.props.ShowProfileTabs("likes");
                }}
              >
                Likes
              </div>
            </div>
            <div className="content">
              <Tabs>
                {this.props.tabs == "tweetandreplies" ? (
                  <TweetsAndReplies />
                ) : (
                  ""
                )}
                {this.props.tabs == "media" ? <Media /> : ""}
                {this.props.tabs == "likes" ? <Likes /> : ""}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Maping to state to props
const mapStateToProps = (state) => {
  return {
    tabs: state.showProfileTabContent,
    windowsWidth: state.windowsWidth,
    modalOpen: state.modalOpen
  };
};

//Mapping Dispatch To props
const mapDispatchToProps = () => {
  return {
    ShowProfileTabs
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(Profile);
