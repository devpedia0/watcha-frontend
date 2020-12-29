import React from "react";
import styled from "styled-components";

const svgObj = {
    twitter: {
        fill: "#73C8FA",
        d:
            "M19.751 4.484l.012.586c0 6.003-4.544 12.93-12.848 12.93-2.55 0-4.921-.753-6.915-2.05.347.046.708.069 1.074.069a9.029 9.029 0 0 0 5.606-1.95c-1.979-.034-3.635-1.352-4.216-3.154a4.531 4.531 0 0 0 2.037-.078 4.537 4.537 0 0 1-3.616-4.45V6.33a4.42 4.42 0 0 0 2.037.565A4.546 4.546 0 0 1 .92 3.12c0-.833.223-1.62.615-2.287a12.769 12.769 0 0 0 9.299 4.744 4.38 4.38 0 0 1-.112-1.038c0-2.5 2.014-4.539 4.509-4.539 1.298 0 2.472.554 3.3 1.43A9.058 9.058 0 0 0 21.396.337a4.517 4.517 0 0 1-1.991 2.512A9.043 9.043 0 0 0 22 2.129a9.326 9.326 0 0 1-2.249 2.355",
    },
    arrow: {
        fill: "#FFF",
        d: "M12 16l6-6H6z",
    },
    arrowGray: {
        fill: "#d9d9d9",
        d: "M12 16l6-6H6z",
    },
};

const Svg = ({ type, w, h }) => {
    if (!svgObj[type]) return;

    return (
        <Wrapper
            type={type}
            w={w}
            h={h}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 18"
            className="css-19n70b4-Svg e1b3k3iz0"
        >
            <path fill={svgObj[type].fill} d={svgObj[type].d} />
        </Wrapper>
    );
};

export default Svg;

const Wrapper = styled.svg`
    width: ${(props) => (props.w ? props.w : "22px")};
    height: ${(props) => (props.h ? props.h : "18px")};
    margin: ${(props) => (props.margin ? props.margin : 0)};
`;

<svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="18"
    viewBox="0 0 22 18"
    className="css-19n70b4-Svg e1b3k3iz0"
>
    <path fill="#73C8FA" d=""></path>
</svg>;
