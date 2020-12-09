import React from "react";
import styled from "styled-components";

const CardList = ({ title, srcShowMore, children }) => {
    return (
        <Wrapper>
            <div className="header">
                <h2>{title}</h2>
                {srcShowMore && (
                    <a className="more" href={srcShowMore}>
                        더보기
                    </a>
                )}
            </div>
            <div className="body">{children}</div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 8px 0px 0px;
    .header {
        margin: 0 20px;
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

    .body {
        margin: 0 20px;
    }
`;

export default React.memo(CardList);
