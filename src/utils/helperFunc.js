import history from "../history";

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
