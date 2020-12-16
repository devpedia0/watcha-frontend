export const changeNumberFormat = (input) => {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return input.toString().replace(regexp, ",");
};
