import React, { Component } from "react";
import { connect } from "react-redux";
class Media extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const elements = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        return (
            <div className="row no-gutters">
                {/* All Feeds */}
                {elements.slice(0, 9).map((value, key) => {
                    return (
                        <div className="col-12" key={value}>
                            <div className="card w-100">
                                <div
                                    className={
                                        this.props.windowsWidth < 600
                                            ? "card-body pl-0 pr-0"
                                            : "card-body"
                                    }
                                >
                                    <div className="row no-gutters">
                                        <div
                                            className={
                                                this.props.windowsWidth < 600
                                                    ? "col-2 text-center"
                                                    : "col-1"
                                            }
                                        >
                                            <img
                                                src={
                                                    "https://picsum.photos/720/108" +
                                                    value
                                                }
                                                className="img-fluid rounded-circle userImage"
                                                alt="adeleye ayodeji"
                                            />
                                        </div>
                                        <div
                                            className={
                                                this.props.windowsWidth < 600
                                                    ? "col-10 pr-3"
                                                    : "col-11"
                                            }
                                        >
                                            <h5 className="card-title">
                                                <b>Adeleye Ayodeji</b>
                                                <span className="ml-1 text-muted small">
                                                    @adeleyeayodeji
                                                </span>
                                            </h5>
                                            <p className="card-text text-dark ">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>

                                            <div className="">
                                                <img
                                                    src={
                                                        "https://picsum.photos/720/108" +
                                                        value
                                                    }
                                                    className="rounded-lg img-fluid w-100 img-thumbnail"
                                                    alt="dsfdsfsd"
                                                    style={{
                                                        height: "250px",
                                                        objectFit: "cover",
                                                        objectPosition:
                                                            "center top"
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
}

const mapStateToProps = state => {
    return {
        windowsWidth: state.windowsWidth
    };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps())(Media);
