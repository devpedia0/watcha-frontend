import React from "react";
import styled from "styled-components";

const CardList = ({ title, addComponent, children }) => {
    return (
        <Wrapper>
            <div className="header">
                <h2>{title}</h2>
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
            float: left;
            color: #000;
            font-size: 19px;
            font-weight: 700;
            letter-spacing: -0.7px;
            line-height: 28px;
            margin: 8px 0;
        }

        a {
            float: right;
            margin: 12px 0;
            &.more {
                color: #ff2f6e;
            }
        }
    }
`;

export default React.memo(CardList);
