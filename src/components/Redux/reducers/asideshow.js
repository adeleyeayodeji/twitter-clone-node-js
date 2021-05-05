const asideShow = (state = false, action) => {
    switch (action.type) {
        case "ACTIVE":
            return true;
            break;
        case "DEACTIVE":
            return false;
            break;
        default:
            return state;
            break;
    }
};

export default asideShow;
