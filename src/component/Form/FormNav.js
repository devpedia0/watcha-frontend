import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormContainer from "../../styles/FormContainer";

const Link = styled(NavLink)`
    &.${(props) => props.activeClassName} {
        color: white !important;
        font-weight: bold;
    }
`;

const FormNav = () => {
    return (
        <FormContainer className="nav nav-pills">
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
        </FormContainer>
    );
};

export default FormNav;
