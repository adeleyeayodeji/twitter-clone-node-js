import React, { Component } from "react";
import { connect } from "react-redux";
import $ from "jquery";
import "jquery.scrollbar";
import { Link, matchPath, withRouter } from "react-router-dom";
import {
  increment,
  decrement,
  feedLoaded
} from "./../../components/Redux/actions/";
/**
 * @author
 * @class Feed
 **/

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      true: "card w-100",
      false: "card w-100 d-none"
    };
    this.handleUrl = this.handleUrl.bind(this);
  }

  _onChange(event) {
    var reader = new FileReader();
    reader.onload = function () {
      if (reader.readyState == 2) {
        $(".imagepreload").attr("src", reader.result);
        $(".imageContainer").fadeIn();
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  handleUrl(url) {
    this.props.history.push(url);
  }
  componentDidMount() {
    this.props.feedLoaded("feedloaded");
  }
  //all Feeds
  allFeeds() {
    //Loop times
    const elements = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    return (
      <div className="row">
        {elements.slice(0, 9).map((value, key) => {
          return (
            <div className="col-12" key={key}>
              <div className="card w-100">
                <div
                  className={
                    this.props.windowsWidth < 900
                      ? "card-body pl-0 pr-0"
                      : "card-body"
                  }
                >
                  <div className="row no-gutters">
                    <div
                      className={
                        this.props.windowsWidth < 900
                          ? "col-2 text-center"
                          : "col-1"
                      }
                    >
                      <img
                        src={
                          "https://pbs.twimg.com/profile_images/1166186489375526912/fA0vk9Xs_200x200.jpg"
                        }
                        className="img-fluid rounded-circle userImage"
                        alt="adeleye ayodeji"
                        onClick={() => this.handleUrl("/profile")}
                      />
                    </div>
                    <div
                      className={
                        this.props.windowsWidth < 900 ? "col-10 pr-3" : "col-11"
                      }
                    >
                      <h5
                        onClick={() => this.handleUrl("/profile")}
                        className="card-title"
                      >
                        <b>Adeleye Ayodeji</b>
                        <span className="ml-1 text-muted small">
                          @adeleyeayodeji
                        </span>
                      </h5>
                      <p className="card-text text-dark ">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>

                      <div className="">
                        <img
                          src={"https://picsum.photos/720/108" + key}
                          className="rounded-lg img-fluid w-100 img-thumbnail"
                          alt="dsfdsfsd"
                          style={{
                            height:
                              this.props.windowsWidth < 600 ? "180px" : "250px",
                            objectFit: "cover",
                            objectPosition: "center top"
                          }}
                        />
                      </div>
                      <div className="row mt-3 mx-auto">
                        <div className="col-3">
                          <i className="far fa-comment"></i>
                        </div>
                        <div className="col-3">
                          <i className="fas fa-retweet"></i>
                        </div>
                        <div className="col-3">
                          <i className="far fa-heart"></i>
                        </div>
                        <div className="col-3">
                          <i
                            className="fa fa-share-square"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  render() {
    $(document).ready(function () {
      $(".editor_ > .editor_").focusout(function () {
        var element = $(this);
        if (!element.text().trim().length) {
          element.html("");
          element.empty();
          $(element).height("28px");
        }
      });
      $(".editor_ > .editor_").keyup(function () {
        var element = $(this);
        if (!element.text().trim().length) {
          element.html("");
          $(".twitter_custom").css({
            background: "#00aced7a",
            cursor: "not-allowed"
          });
          element.empty();
          $(element).height("28px");
        } else {
          $(".twitter_custom").css({
            background: "#00aced",
            cursor: "pointer"
          });
        }
      });
    });

    //Remove image preload
    let removeImagePreload = () => {
      $(".imageContainer").fadeOut();
      $("#imageUploader").val("");
    };
    return (
      <div className="scrollbar-inner">
        {/* Trends for you */}
        {this.props.children}
        {/* Add New Feed */}
        {this.props.windowsWidth > 500 && (
          <div
            className={
              this.props.addNew == "false" ? this.state.false : this.state.true
            }
          >
            <div
              className="card-body bg-white"
              style={{
                paddingTop: "7px",
                paddingBottom: "8px",
                paddingLeft: "0px"
              }}
            >
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
                    onClick={() => this.handleUrl("/profile")}
                  />
                </div>
                <div className="col-10">
                  <div
                    style={{ cursor: "text" }}
                    className="editor_ mt-1 scrollbar-macosx bg-white"
                    contentEditable="true"
                    placeholder="Whats happening?"
                  ></div>
                  {/* Image preload container */}
                  <div
                    className="col-12 p-0 m-0 mt-3 imageContainer"
                    style={{ display: "none" }}
                  >
                    <div
                      className="row no-gutters"
                      style={{
                        position: "absolute",
                        paddingTop: "7px",
                        paddingLeft: "10px"
                      }}
                    >
                      <div className="col">
                        <i
                          className="fas fa-times pb-3"
                          onClick={removeImagePreload}
                          style={{
                            fontSize: "22px",
                            color: "rgb(248 250 252)",
                            cursor: "pointer",
                            background: "#0000008c",
                            height: "40px",
                            borderRadius: "20px",
                            width: "40px",
                            textAlign: "center"
                          }}
                        ></i>
                      </div>
                    </div>
                    <img className="imagepreload" />
                  </div>
                  {/* Image preload container ends here */}
                  <div
                    className="row m-1 mt-2 pt-1 no-gutters"
                    style={{
                      borderTop: "0.1em solid #e6ecf0",
                      borderWidth: "2px"
                    }}
                  >
                    <div
                      className={
                        this.props.windowsWidth < 900 ? "col-9" : "col-10"
                      }
                    >
                      <div className="row no-gutters">
                        <div
                          className={
                            this.props.windowsWidth < 900 ? "col-2" : "col-1"
                          }
                        >
                          <label className="p-0 m-0">
                            <input
                              id="imageUploader"
                              name="image"
                              type="file"
                              onChange={this._onChange}
                              style={{
                                display: "none"
                              }}
                            />
                            <i
                              className="fas fa-image"
                              aria-hidden="true"
                              style={{
                                color: "#1DA1F2",
                                fontSize: "large"
                              }}
                            ></i>
                          </label>
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
                      className={
                        this.props.windowsWidth < 900
                          ? "col-3 twitter_btn twitter_custom"
                          : "col-2 twitter_btn twitter_custom"
                      }
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
        )}

        {/* All Feeds */}
        {!this.props.feedLoadedData && (
          <div
            className="card text-center"
            style={{ width: "100%", height: "100%" }}
          >
            <img
              src="assets/images/loader.gif"
              style={{
                height: "80px",
                width: "80px",
                margin: "0 auto"
              }}
            />
          </div>
        )}

        {this.props.feedLoadedData && this.allFeeds()}
      </div>
    );
  }
}

//Maping to state to props
const mapStateToProps = (state) => {
  return {
    count: state.counter,
    windowsWidth: state.windowsWidth,
    feedLoadedData: state.feedLoaded
  };
};

//Mapping Dispatch To props
const mapDispatchToProps = () => {
  return {
    increment,
    decrement,
    feedLoaded
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(withRouter(Feed));
