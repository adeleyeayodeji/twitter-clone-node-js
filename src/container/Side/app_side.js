import React, { Component } from "react";
import Search from "../Search/search";
import Trends from "../Trends/trends";
import Follows from "../Follow/follow";
import $ from "jquery";
import "jquery.scrollbar";
import { connect } from "react-redux";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { modalOpenActive } from "./../../components/Redux/actions/index";
import { Link } from "react-router-dom";
/**
 * @author
 * @class AppSide
 **/

class AppSide extends Component {
  constructor() {
    super();
    this.state = { photoIndex: 0, isOpen: false, currentURLIndex: 0 };
  }
  render() {
    const { photoIndex, isOpen, currentURLIndex } = this.state;
    //Dom function
    $(document).ready(function () {
      $(".scrollbar-inner").scrollbar();
    });
    //resize
    let size1199;
    if (this.props.windowsWidth < 900) {
      size1199 = "d-none app_nav";
    } else if (this.props.windowsWidth < 1199) {
      size1199 = "d-block col-4 app_side";
    } else if (this.props.windowsWidth > 1199) {
      size1199 = "d-block col-3 app_side";
    }
    let arrays = [1, 2, 3, 4, 3, 3];
    const images = arrays.map((value, key) => {
      return "https://picsum.photos/1080/72" + key;
    });
    return (
      <div className={size1199}>
        <Search
          placement="aside"
          remove={this.props.asideShow == true ? true : false}
        />
        <div className="mt-2"></div>
        <div className="scrollbar-inner">
          <Trends remove={this.props.asideShow == true ? true : false}>
            {this.props.profilePath && (
              <div>
                {isOpen && (
                  <Lightbox
                    mainSrc={images[currentURLIndex]}
                    nextSrc={images[(currentURLIndex + 1) % images.length]}
                    prevSrc={
                      images[
                        (currentURLIndex + images.length - 1) % images.length
                      ]
                    }
                    onCloseRequest={() => {
                      this.props.modalOpenActive("false");
                      this.setState({ isOpen: false });
                    }}
                    onMovePrevRequest={() =>
                      this.setState({
                        currentURLIndex:
                          (currentURLIndex + images.length - 1) % images.length
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        currentURLIndex: (currentURLIndex + 1) % images.length
                      })
                    }
                  />
                )}

                <div className="row no-gutters">
                  {arrays.map((value, key) => {
                    let radius;
                    if (key == 0) {
                      radius = {
                        borderTopLeftRadius: "13px"
                      };
                    } else if (key == 2) {
                      radius = {
                        borderTopRightRadius: "13px"
                      };
                    } else if (key == 3) {
                      radius = {
                        borderBottomLeftRadius: "13px"
                      };
                    } else if (key == 5) {
                      radius = {
                        borderBottomRightRadius: "13px"
                      };
                    }
                    return (
                      <div className="col-4" key={key}>
                        <div
                          className="card border-0"
                          style={{ padding: "1px" }}
                        >
                          <img
                            src={"https://picsum.photos/1080/72" + key}
                            className="img-fluid"
                            alt=""
                            style={{
                              ...radius,
                              width: "114px",
                              height: "96px",
                              objectFit: "cover",
                              objectPosition: "center top",
                              cursor: "pointer"
                            }}
                            onClick={() => {
                              this.props.modalOpenActive("true");
                              this.setState({
                                isOpen: true,
                                currentURLIndex: key
                              });
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {this.props.profilePath && <p></p>}
            {/* p For spacing */}
            {this.props.profilePath && <Follows title="You might like" />}
            {this.props.profilePath && <p></p>}
            {/* p For spacing */}
          </Trends>
          {!this.props.profilePath && <Follows />}
          <div className=" pt-3">
            <i className="fa fa-copyright" aria-hidden="true"></i> 2020 Fix
            Nigerian Road <br /> Developed by{" "}
            <Link
              to={{ pathname: "https://adeleyeayodeji.com" }}
              target="_blank"
            >
              Adeleye Ayodeji
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

//Maping to state to props
const mapStateToProps = (state) => {
  return {
    asideShow: state.asideShow,
    windowsWidth: state.windowsWidth,
    profilePath: state.profilePath,
    modalOpen: state.modalOpen
  };
};

//Mapping Dispatch To props
const mapDispatchToProps = () => {
  return {
    modalOpenActive
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(AppSide);
