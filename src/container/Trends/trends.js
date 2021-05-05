import React, { Component } from "react";
import { Link } from "react-router-dom";

class Trends extends Component {
    constructor() {
        super();
        this.state = {
            display: "none"
        };
    }
    render() {
        return (
            <div className="content">
                {this.props.children}
                <div
                    className="card"
                    style={{
                        display:
                            this.props.remove == true
                                ? this.state.display
                                : "block"
                    }}
                >
                    <div className="card-header">
                        <div
                            className="font-weight-bold h5"
                            style={{
                                fontFamily: "'Markazi Text', serif",
                                fontSize: "25px",
                                margin: "0px"
                            }}
                        >
                            Trends for you
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-11">
                                    <div className="p text-muted">
                                        Trends in Lagos
                                    </div>
                                    <div className="font-weight-bold h5 pt-1">
                                        <b>#room402</b>
                                    </div>
                                    <div className="p text-muted">
                                        4,309 Tweets
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-11">
                                    <div className="p text-muted">
                                        Trends in Lagos
                                    </div>
                                    <div className="font-weight-bold h5 pt-1">
                                        <b>#room402</b>
                                    </div>
                                    <div className="p text-muted">
                                        4,309 Tweets
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-11">
                                    <div className="p text-muted">
                                        Trends in Lagos
                                    </div>
                                    <div className="font-weight-bold h5 pt-1">
                                        <b>#room402</b>
                                    </div>
                                    <div className="p text-muted">
                                        4,309 Tweets
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <Link className="font-weight-bold" to="/">
                                Show More
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Trends;
