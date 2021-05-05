export const increment = () => {
    return {
        type: "INCREMENT"
    };
};

export const decrement = () => {
    return {
        type: "DECREMENT"
    };
};

//AsideShow Actions
export const AsideShowActive = () => {
    return {
        type: "ACTIVE"
    };
};
export const AsideShowDeactive = () => {
    return {
        type: "DEACTIVE"
    };
};

//Profile tabs
export const ShowProfileTabs = types => {
    return {
        type: types
    };
};

//Check windowsSize
export const windowsSize = (change, currenSize) => {
    return {
        type: change,
        change: currenSize
    };
};

//Check profile page
export const profileActive = type => {
    return {
        type: type
    };
};

//Check profile page
export const modalOpenActive = type => {
    return {
        type
    };
};

//Check profile page
export const feedLoaded = type => {
    return {
        type
    };
};
