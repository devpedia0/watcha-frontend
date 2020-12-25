import React, { useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";
import api from "../../../services/api";

import words from "./dummyTag";

const options = {
    colors: ["#ff2f6e"],
    enableTooltip: false,
    deterministic: true,
    fontSizes: [17, 17],
    fontStyle: "normal",
    fontWeight: "bold",
    padding: 10,
    rotations: 0,
    transitionDuration: 0,
};

export default function MyTag() {
    return (
        <div style={{ height: 300, width: 300 }}>
            <ReactWordcloud options={options} words={words} />
        </div>
    );
}
