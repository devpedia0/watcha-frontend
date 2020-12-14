import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Chart from "chart.js";
import { CardList } from "../../../components";

const Score = ({ score, total }) => {
    return (
        <WrapperScore>
            평균 ★{score}
            <br />
            <span>({total}명)</span>
        </WrapperScore>
    );
};

const DetailSectionInfo = ({ data }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["", "1", "", "2", "", "3", "", "4", "", "5"],
                datasets: [
                    {
                        //label: "# of Votes",
                        barPercentage: 0.95,
                        categoryPercentage: 1,
                        data: [1, 5, 3, 5, 2, 3, 5, 1, 6, 3],
                        backgroundColor: [
                            "#ffdd63",
                            "#ffa136",
                            "#ffdd63",
                            "#ffdd63",
                            "#ffdd63",
                            "#ffdd63",
                            "#ffdd63",
                            "#ffdd63",
                            "#ffdd63",
                            "#ffdd63",
                        ],
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
        });
    }, []);

    return (
        <Wrapper>
            <CardList
                title="별점 그래프"
                sizeHeader="sm"
                addComponent={<Score score="4.0" total="1273" />}
            >
                <Canvas>
                    <canvas
                        ref={canvasRef}
                        style={{ width: "375px", height: "150px" }}
                    />
                </Canvas>
            </CardList>
            <Divider />
        </Wrapper>
    );
};

export default React.memo(DetailSectionInfo);

const Wrapper = styled.div`
    margin: 0 20px;
    overflow: hidden;
`;

const Divider = styled.div`
    margin: 20px 0 0;
    border-bottom: 1px solid #f0f0f0;
`;
const WrapperScore = styled.div`
    color: #282828;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -0.7px;
    line-height: 22px;
    text-align: right;
    margin: 10px 0 0;
    span {
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.3px;
        line-height: 19px;
        color: #787878;
    }
`;

const Canvas = styled.div`
    max-width: 375px;
    margin: 58px auto 0px;
`;
