const profilePath = (state = false, action) => {
    switch (action.type) {
        case "Ptrue":
            return true;
            break;
        case "Pfalse":
            return false;
            break;
        default:
            return state;
            break;
    }
};

export default profilePath;
