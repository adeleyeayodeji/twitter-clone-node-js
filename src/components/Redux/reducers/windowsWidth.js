import $ from "jquery";
const WindowsWidth = (state = $(window).width(), current) => {
  switch (current.type) {
    case "change":
      return current.change;
      break;
    case "default":
      return state;
      break;
    default:
      return state;
      break;
  }
};

export default WindowsWidth;
