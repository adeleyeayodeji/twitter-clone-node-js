import React, { Component } from "react";
class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <div className="container p-0">{this.props.children}</div>;
    }
}

export default Tabs;
