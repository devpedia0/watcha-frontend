import React, { useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";
import api from "../../../../services/api";

const options = {
    // colors: ["#ff2f6e"],
    deterministic: true,
    fontSizes: [13, 17],
    fontStyle: "normal",
    fontWeight: "bold",
    padding: 10,
    rotations: 0,
    transitionDuration: 0,
};

const callback = {
    getWordColor: (word) =>
        word.value > 4 ? "rgb(255, 47, 110)" : "rgb(255, 47, 110, 0.5)",
};

export default function MyTag() {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("id"));
        const getData = async () => {
            const response = await api.get(`/users/${id}/analysis`);

            setTags(() => response.data.movie.tag);
        };
        getData();
    }, []);

    const newArray = tags.map((item) => {
        return { text: item.description, value: item.score };
    });

    return (
        <div style={{ height: 300, width: 300 }}>
            <ReactWordcloud
                options={options}
                callbacks={callback}
                words={newArray}
            />
        </div>
    );
}
