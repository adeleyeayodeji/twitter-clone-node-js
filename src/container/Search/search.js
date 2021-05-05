import React, { Component } from "react";
import { connect } from "react-redux";
import $ from "jquery";
class Search extends Component {
  constructor() {
    super();
    this.state = {
      aside: "col-10 h5",
      explore: "col-10 mt-2 h5",
      asideContainer: "row pt-2 rounded-pill",
      exploreContainer: "row rounded-pill",
      display: "none"
    };
  }
  render() {
    //Editor form content trimming
    $(".editor2").focusout(function () {
      var element = $(this);
      if (!element.text().trim().length) {
        element.html("");
        element.empty();
      }
    });
    //More Styles
    let moreStyles;
    if (this.props.remove == true) {
      moreStyles = this.state.display;
    } else {
      moreStyles = this.props.modalOpen == true ? "contents" : "flow-root";
    }
    return (
      <div
        className="card p-2 pl-4 pr-4 sticky-top"
        style={{
          display: moreStyles
        }}
      >
        <div
          className={
            this.props.placement == "aside"
              ? this.state.asideContainer
              : this.state.exploreContainer
          }
          style={{ background: "#E6ECF0" }}
        >
          <div className="col-1">
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
          <input
            className={
              this.props.placement == "aside"
                ? this.state.aside
                : this.state.explore
            }
            style={{
              cursor: "text",
              outline: "none",
              border: "none",
              background: "transparent"
            }}
            placeholder="Search Bad Roads"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalOpen: state.modalOpen
  };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps())(Search);
