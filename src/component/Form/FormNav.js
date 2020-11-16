import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.ul`
    margin-bottom: 30px;
`;

const Link = styled(NavLink)`
    &.${(props) => props.activeClassName} {
        color: #ff0558 !important;
        font-weight: bold;
    }
`;

const FormNav = () => {
    return (
        <Wrapper className="nav nav-tabs">
            <li className="nav-item">
                <Link
                    to="/form/content"
                    className="nav-link"
                    activeClassName="active"
                >
                    컨텐츠
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/form/people"
                    className="nav-link"
                    activeClassName="active"
                >
                    관계자
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/form/collection"
                    className="nav-link"
                    activeClassName="active"
                >
                    컬렉션
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/form/tag"
                    className="nav-link"
                    activeClassName="active"
                >
                    태그입력
                </Link>
            </li>
        </Wrapper>
    );
};

export default FormNav;
