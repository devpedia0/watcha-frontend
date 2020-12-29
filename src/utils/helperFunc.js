import history from "../history";

export const changeNumberFormat = (input) => {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return input.toString().replace(regexp, ",");
};

export const getPageId = () => {
    const pathname = history.location.pathname;
    const pageId = pathname.split("/")[2];
    return pageId;
};
