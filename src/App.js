import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
  matchPath
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { MDBBtn } from "mdbreact";
import AppNav from "./container/Nav/app_nav";
import AppBody from "./container/Body/app_body";
import AppSide from "./container/Side/app_side";
import Explore from "./container/Explore/explore";
import Notification from "./container/Notification/notification";
import Profile from "./container/Profile/profile";
import RootContainer from "./container/RootContainer/root";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <RootContainer>
          <div className="row">
            <AppNav />
            <Switch>
              <Route exact path="/" component={AppBody} />
              <Route path="/explore" component={Explore} />
              <Route path="/notification" component={Notification} />
              <Route path="/profile" component={Profile} />
            </Switch>
            {/* <AppBody /> */}
            <AppSide />
          </div>
        </RootContainer>
      </BrowserRouter>
    );
  }
}

export default App;
