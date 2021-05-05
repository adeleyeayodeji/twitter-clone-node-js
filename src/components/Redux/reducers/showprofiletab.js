const showProfileTab = (state = "tweetandreplies", tabs) => {
    switch (tabs.type) {
        case "tweetandreplies":
            return "tweetandreplies";
            break;
        case "media":
            return "media";
            break;
        case "likes":
            return "likes";
            break;
        default:
            return state;
            break;
    }
};

export default showProfileTab;
