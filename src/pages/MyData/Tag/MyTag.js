import React, { useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";
import api from "../../../services/api";

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
    const [tags, setTags] = useState({}); // api key 값 바꿔달라고 하기

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("id"));
        const getData = async () => {
            const response = await api.get(`/users/${id}/analysis`);

            // console.log("useEffect", response);
            setTags(() => response.data.movie.tag);
        };
        // console.log(tags);
        getData();
    });

    const newArray = tags.map((item) => {
        return { text: item.description, value: item.score };
    });

    return (
        <div style={{ height: 300, width: 300 }}>
            <ReactWordcloud options={options} words={newArray} />
        </div>
    );
}
