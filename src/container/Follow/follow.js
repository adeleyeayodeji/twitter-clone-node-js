import React, { Component } from "react";
import { Link } from "react-router-dom";

class Follows extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="card rounded mt-2">
                <div className="card-header">
                    <div
                        className="font-weight-bold h5"
                        style={{
                            fontFamily: "'Markazi Text', serif",
                            fontSize: "25px",
                            margin: "0px"
                        }}
                    >
                        {this.props.title ? this.props.title : "Who to Follow"}
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="row no-gutters">
                            <div className="col-3 text-center">
                                <img
                                    src="https://picsum.photos/720/1081"
                                    className="img-fluid rounded-circle userImageText"
                                    alt="adeleye ayodeji"
                                    style={{
                                        height: "50px",
                                        width: "50px"
                                    }}
                                />
                            </div>
                            <div className="col-6">
                                <div className="font-weight-bold h6 pt-1 mb-0">
                                    <b>Adeleye Ayodeji</b>
                                </div>
                                <div className="p text-muted">
                                    @adeleyeayodeji
                                </div>
                            </div>
                            <div className="col-3 text-center pt-2">
                                <button className="btn btn-sm btn-outline-primary rounded followBtn">
                                    Follow
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row no-gutters">
                            <div className="col-3 text-center">
                                <img
                                    src="https://picsum.photos/720/1083"
                                    className="img-fluid rounded-circle userImageText"
                                    alt="adeleye ayodeji"
                                    style={{
                                        height: "50px",
                                        width: "50px"
                                    }}
                                />
                            </div>
                            <div className="col-6">
                                <div className="font-weight-bold h6 pt-1 mb-0">
                                    <b>Adeleye Ayodeji</b>
                                </div>
                                <div className="p text-muted">
                                    @adeleyeayodeji
                                </div>
                            </div>
                            <div className="col-3 text-center pt-2">
                                <button className="btn btn-sm btn-outline-primary rounded followBtn">
                                    Follow
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row no-gutters">
                            <div className="col-3 text-center">
                                <img
                                    src="https://picsum.photos/720/1085"
                                    className="img-fluid rounded-circle userImageText"
                                    alt="adeleye ayodeji"
                                    style={{
                                        height: "50px",
                                        width: "50px"
                                    }}
                                />
                            </div>
                            <div className="col-6">
                                <div className="font-weight-bold h6 pt-1 mb-0">
                                    <b>Adeleye Ayodeji</b>
                                </div>
                                <div className="p text-muted">
                                    @adeleyeayodeji
                                </div>
                            </div>
                            <div className="col-3 text-center pt-2">
                                <button className="btn btn-sm btn-outline-primary rounded followBtn">
                                    Follow
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <Link className="font-weight-bold" to="/">
                            Show More
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Follows;
