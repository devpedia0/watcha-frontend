import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Chart from "chart.js";

const option = {
    type: "bar",
    data: {
        labels: [],
        datasets: [
            {
                barPercentage: 0.95,
                categoryPercentage: 1,
                data: [],
                backgroundColor: [],
            },
        ],
    },
    options: {
        scaleShowLabels: false,
        scales: {
            xAxes: [
                {
                    stacked: false,
                    gridLines: { display: false },
                },
            ],
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        display: false,
                    },
                    gridLines: { display: false },
                },
            ],
        },
        legend: { display: false },
        tooltips: {
            enabled: false,
            intersect: false,
        },
    },
};

const makeOption = (data) => {
    let labels = Object.keys(data);
    let values = Object.values(data);
    let colors = [];

    const maxIndex = values.reduce(
        (iMax, x, i, arr) => (x > arr[iMax] ? i : iMax),
        0
    );
    colors = values.map((_, idx) => (idx === maxIndex ? "#ffa136" : "#ffdd63"));
    labels = labels.map((label, idx) => (idx % 2 === 1 ? label : ""));

    option.data.labels = labels;
    option.data.datasets[0].data = Object.values(data);
    option.data.datasets[0].backgroundColor = colors;

    return option;
};

const BarChart = ({ data }) => {
    const chartOption = makeOption(data);
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        new Chart(ctx, chartOption);
    }, [chartOption]);

    return (
        <Canvas>
            <canvas
                ref={canvasRef}
                style={{ width: "375px", height: "150px" }}
            />
        </Canvas>
    );
};

export default BarChart;

const Canvas = styled.div`
    max-width: 375px;
    margin: 58px auto 0px;
`;
