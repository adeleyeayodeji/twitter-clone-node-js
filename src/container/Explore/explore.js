import React, { Component } from "react";
import Feed from "../Feed/feed";
import Search from "../Search/search";
import Trends from "./../Trends/trends";
import { connect } from "react-redux";
import { AsideShowActive } from "../../components/Redux/actions";

/**
 * @author
 * @class Explore
 **/

class Explore extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
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
                <Search placement="explore" remove={false} />
                {/* News Feed */}
                <Feed addNew="false" height="half">
                    {/* Trends for you */}
                    <Trends />
                </Feed>
            </div>
        );
    }
}

//Maping to state to props
const mapStateToProps = state => {
    return {
        log: state.asideShow,
        windowsWidth: state.windowsWidth
    };
};

//Mapping Dispatch To props
const mapDispatchToProps = () => {
    return {
        AsideShowActive
    };
};
export default connect(mapStateToProps, mapDispatchToProps())(Explore);
