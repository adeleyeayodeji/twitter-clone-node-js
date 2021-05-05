const modalOpen = (state = false, action) => {
    switch (action.type) {
        case "true":
            return true;
            break;
        case "false":
            return false;
            break;
        default:
            return state;
            break;
    }
};

export default modalOpen;
