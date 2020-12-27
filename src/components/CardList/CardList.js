import React from "react";
import styled from "styled-components";

const CardList = ({ className, title, count, addComponent, children }) => {
    return (
        <Wrapper className={className}>
            <div className="header">
                <h2>
                    {title}
                    <span>{count}</span>
                </h2>
                <div className="right">{addComponent}</div>
            </div>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 8px 0px 0px;
    .header {
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        h2 {
            white-space: nowrap;
            float: left;
            color: #000;
            font-size: 19px;
            font-weight: 700;
            letter-spacing: -0.7px;
            line-height: 28px;
            margin: 8px 0;
        }
    }

    .header span {
        display: inline-block;
        color: rgb(160, 160, 160);
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.5px;
        line-height: 20px;
        margin: 12px 0px 12px 6px;
    }
`;

export default React.memo(CardList);
