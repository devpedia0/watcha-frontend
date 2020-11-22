import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding-top: ${(props) => (props.pt ? props.pt : "0px")};
    padding-bottom: ${(props) => (props.pb ? props.pb : "30px")};
    border-bottom: 1px solid #f0f0f0;
    height: auto;

    .header {
        margin: 20px 0;
        font-size: 1.5rem;
        font-weight: bold;
        // border-bottom: 1px solid #ced4da;
    }

    .tag {
        margin-top: 10px;
        margin-right: 10px;
        font-size: 1.1rem;
    }
`;

const CardList = ({ title, children, ...rest }) => {
    return (
        <Wrapper {...rest}>
            <div className="header">{title}</div>
            {children}
        </Wrapper>
    );
};

export default React.memo(CardList);
