const feedLoaded = (state = false, current) => {
    switch (current.type) {
        case "feedloaded":
            return true;
            break;
        default:
            return state;
            break;
    }
};

export default feedLoaded;
