import React, { Component } from "react";
import $ from "jquery";
import "jquery.scrollbar";
import { connect } from "react-redux";
/**
 * @author
 * @class Notification
 **/

class Notification extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const elements = [1, 2, 2, 2, 2, 2, 2, 2, 2];

    $(document).ready(function () {
      $(".scrollbar-inner").scrollbar();
    });
    //Resize
    let size1199;
    if (this.props.windowsWidth <= 500) {
      size1199 = "col-12 notification_app";
    } else if (this.props.windowsWidth < 900) {
      size1199 = "col-10 notification_app";
    } else if (this.props.windowsWidth < 1199) {
      size1199 = "col-7 notification_app";
    } else if (this.props.windowsWidth > 1199) {
      size1199 = "col-6 notification_app";
    }
    return (
      <div className={size1199}>
        {/* Sticky Header */}
        <div className="card p-2 sticky-top" style={{ display: "flow-root" }}>
          <h3
            className="font-weight-bold float-left w-50"
            style={{
              fontFamily: "'Markazi Text', serif",
              fontSize: "29px"
            }}
          >
            Notification
          </h3>
          <i
            className="fa fa-cog float-right w-50 text-right"
            aria-hidden="true"
          ></i>
        </div>

        <div className="row scrollbar-inner">
          {elements.map((value, index) => {
            return (
              <div className="col-12" key={index}>
                <div className="card w-100">
                  <div className="card-body">
                    <div className="row no-gutters">
                      <div className="col-1">
                        <i
                          className="fa fa-star"
                          aria-hidden="true"
                          style={{
                            fontSize: "20px"
                          }}
                        ></i>
                      </div>
                      <div className="col-10 ml-3">
                        <h5 className="card-title">
                          <div className="row no-gutters">
                            <div className="col-1">
                              <img
                                src={"https://picsum.photos/720/108" + index}
                                className="img-fluid rounded-circle userImage"
                                alt="adeleye ayodeji"
                                style={{
                                  height: "24px",
                                  width: "24px"
                                }}
                              />
                            </div>
                            <div className="col-1">
                              <img
                                src={"https://picsum.photos/720/108" + index}
                                className="img-fluid rounded-circle userImage"
                                alt="adeleye ayodeji"
                                style={{
                                  height: "24px",
                                  width: "24px"
                                }}
                              />
                            </div>
                            <div className="col-1">
                              <img
                                src={"https://picsum.photos/720/108" + index}
                                className="img-fluid rounded-circle userImage"
                                alt="adeleye ayodeji"
                                style={{
                                  height: "24px",
                                  width: "24px"
                                }}
                              />
                            </div>
                          </div>
                        </h5>
                        <p className="card-text">
                          JSONPlaceholderMan technologistRocket follows you —
                          join <b>Chuks Okwuenu</b> and 2 others in following
                          them
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    windowsWidth: state.windowsWidth
  };
};

const mapDispatchToProps = () => {};
export default connect(mapStateToProps, mapDispatchToProps())(Notification);
