import history from "../history";

const images = [
    "https://images.watcha.net/user/768238/small/9681b5d769447364bd9cbe78d225acbdc38116dc.jpg",
    "https://images.watcha.net/user/1262803/small/3b36ee1183a7870b4b77db7512d5b86e1f146b5f.jpg",
    "https://images.watcha.net/user/400256/small/53f9a1ac521723eccdc06b80fe364b41d5c482b9.jpg",
    "https://images.watcha.net/user/145298/small/c7284d4b70f01cfed809ab77694f2499cf46eec5.jpg",
    "https://images.watcha.net/user/130008/small/213298ad9b141f27931d087f70a7c2a97b9d12df.png",
    "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_100,w_100/v1583633236/kw9yp7rnvqjni4vf3lsr.jpg",
    "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_100,w_100/v1530721104/ppvhnli1tpbuuursaxm6.jpg",
];

export const changeNumberFormat = (input) => {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return input.toString().replace(regexp, ",");
};

export const getPageId = () => {
    const pathSplit = history.location.pathname.split("/");
    const pageId = pathSplit[2];
    return pageId;
};

export const getUserId = () => {
    const pathSplit = history.location.pathname.split("/");
    const userId = pathSplit[4] ? "/" + pathSplit[4] : "";
    return userId;
};

export const changeDataFormat = (key, value) => {
    switch (key) {
        case "runningTime":
            return `${parseInt(value / 60)}시간 ${value % 60}분`;

        case "productionDate":
            return value.split("-")[0];
        default:
            return value;
    }
};

export const randomUserImg = () => {
    return images[Math.floor(Math.random(1) * images.length)];
};

export const makeUrlQuery = (fetchUrl, params) => {
    let result = fetchUrl;
    Object.keys(params).forEach((key) => {
        if (fetchUrl.indexOf("?") > -1) {
            result += `&${key}=${params[key]}`;
        } else {
            result += `?${key}=${params[key]}`;
        }
    });
    return result;
};
