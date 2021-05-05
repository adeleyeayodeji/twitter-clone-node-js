import counterReducer from "./counter";
import LoggedReducer from "./isLogged";
import asideShow from "./asideshow";
import { combineReducers } from "redux";
import showProfileTab from "./showprofiletab";
import WindowsWidth from "./windowsWidth";
import profilePath from "./profilePath";
import modalOpen from "./modalOpen";
import feedLoaded from "./feedLoaded";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: LoggedReducer,
  asideShow: asideShow,
  showProfileTabContent: showProfileTab,
  windowsWidth: WindowsWidth,
  profilePath: profilePath,
  modalOpen,
  feedLoaded
});

export default allReducers;
