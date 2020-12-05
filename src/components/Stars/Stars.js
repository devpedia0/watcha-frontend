import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ratedTextMap = {
    0.0: "평가하기",
    0.5: "최악이에요",
    1.0: "싫어요",
    1.5: "재미없어요",
    2.0: "별로에요",
    2.5: "부족해요",
    3.0: "보통이에요",
    3.5: "볼만해요",
    4.0: "재미있어요",
    4.5: "훌륭해요!",
    5.0: "최고에요!",
};

const Stars = () => {
    // [ TODO ]
    // fechtedRate props 받는걸로 변경
    const [fetchedRate, setFetchedRate] = useState(4.0);
    const [rate, setRate] = useState(0);

    useEffect(() => {
        setRate(fetchedRate);
    }, [fetchedRate]);

    const Star = ({ isRated }) => {
        return <span className={`${isRated ? "star_rated" : "star"}`}></span>;
    };

    const handleMouseMove = (e) => {
        setRate((Math.floor((e.nativeEvent.layerX / 40) * 2) + 1) / 2);
    };

    const handleMouseLeave = () => {
        setRate(fetchedRate || 0);
    };

    const handleClick = async () => {
        // [ TODO ] API 통신
        // await api.post('/rated', rate)
        setFetchedRate(rate);
    };

    return (
        <StarContainer rate={rate}>
            <div className="text">{ratedTextMap[rate]}</div>

            <div
                className="star_block"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                {[...new Array(5)].map((_, idx) => (
                    <Star key={idx} />
                ))}
                <div className="rated_stars">
                    {[...new Array(5)].map((_, idx) => (
                        <Star key={idx} isRated={true} />
                    ))}
                </div>
            </div>
        </StarContainer>
    );
};

export default React.memo(Stars);

const StarContainer = styled.div`
    .text {
        color: rgb(120, 120, 120);
        font-size: 12px;
        font-weight: 400;
        letter-spacing: -0.2px;
        line-height: 16px;
        text-align: center;

        @media only screen and (min-width: 719px) {
            text-align: left;
        }
    }

    .star_block {
        position: relative;
        text-align: center;
        width: 200px;
        margin: 0px auto;
        cursor: pointer;

        display: inline-block;
        position: relative;
        vertical-align: top;
        height: 40px;

        @media only screen and (min-width: 719px) {
            margin: 3px 0px 0px;
        }
    }

    .unratedStars {
        display: inline-block;
        position: relative;
        vertical-align: top;
        height: 40px;
    }

    .rated_stars {
        position: absolute;
        top: 0px;
        left: 0px;
        white-space: nowrap;
        width: ${(props) => (props.rate ? props.rate * 20 + "%" : "0")};
        height: 40px;
        overflow: hidden;
    }

    .star {
        display: inline-block;
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDQ0IDQ0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0VFRSIgZD0iTTIyIDMzLjQ0NEw5LjgzIDQyLjMyN2MtLjc4NC41NzItMS44NDItLjE5Ni0xLjUzOS0xLjExOGw0LjY4Ny0xNC4zMkwuNzY5IDE4LjA2Yy0uNzg3LS41NjktLjM4My0xLjgxMi41ODgtMS44MWwxNS4wNjcuMDMzIDQuNjI0LTE0LjM0Yy4yOTgtLjkyNCAxLjYwNi0uOTI0IDEuOTA0IDBsNC42MjQgMTQuMzQgMTUuMDY3LS4wMzNjLjk3MS0uMDAyIDEuMzc1IDEuMjQxLjU4OCAxLjgxbC0xMi4yMDkgOC44MjkgNC42ODggMTQuMzJjLjMwMi45MjItLjc1NiAxLjY5LTEuNTQgMS4xMThMMjIgMzMuNDQ0eiIvPgogICAgPC9nPgo8L3N2Zz4K)
            center center / contain no-repeat;
        vertical-align: top;
        width: 40px;
        height: 40px;
    }

    .star_rated {
        display: inline-block;
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDQ0IDQ0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGREQ2MyIgZD0iTTIyIDMzLjQ0NEw5LjgzIDQyLjMyN2MtLjc4NC41NzItMS44NDItLjE5Ni0xLjUzOS0xLjExOGw0LjY4Ny0xNC4zMkwuNzY5IDE4LjA2Yy0uNzg3LS41NjktLjM4My0xLjgxMi41ODgtMS44MWwxNS4wNjcuMDMzIDQuNjI0LTE0LjM0Yy4yOTgtLjkyNCAxLjYwNi0uOTI0IDEuOTA0IDBsNC42MjQgMTQuMzQgMTUuMDY3LS4wMzNjLjk3MS0uMDAyIDEuMzc1IDEuMjQxLjU4OCAxLjgxbC0xMi4yMDkgOC44MjkgNC42ODggMTQuMzJjLjMwMi45MjItLjc1NiAxLjY5LTEuNTQgMS4xMThMMjIgMzMuNDQ0eiIvPgogICAgPC9nPgo8L3N2Zz4K)
            center center / contain no-repeat;
        vertical-align: top;
        width: 40px;
        height: 40px;
    }

    @media only screen and (min-width: 719px) {
        float: left;
        margin: 15px 0 0;
    }
`;
