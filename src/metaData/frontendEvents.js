export default {
    postRequest: require("./frontendEvents/postRequest.js").default,
    beforeRouter: require("./frontendEvents/beforeRouter.js").default,
    rendered: require("./frontendEvents/rendered.js").default,
};
