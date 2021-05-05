const LoggedReducer = (state = false, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return !state; //Opposite of state
            break;
        default:
            return state;
    }
};

export default LoggedReducer;
