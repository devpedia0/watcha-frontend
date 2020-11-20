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
    console.log("FormNav");
    return (
        <FormContainer className="card">
            <div className="card-body">
                <div className="nav nav-pills">
                    <li className="nav-item">
                        <Link
                            to="/admin/movie"
                            className="nav-link"
                            activeClassName="active"
                        >
                            영화
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/admin/book"
                            className="nav-link"
                            activeClassName="active"
                        >
                            책
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/admin/tv"
                            className="nav-link"
                            activeClassName="active"
                        >
                            TV
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/admin/people"
                            className="nav-link"
                            activeClassName="active"
                        >
                            관계자
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/admin/collection"
                            className="nav-link"
                            activeClassName="active"
                        >
                            컬렉션
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/admin/tag"
                            className="nav-link"
                            activeClassName="active"
                        >
                            태그입력
                        </Link>
                    </li>
                </div>
            </div>
        </FormContainer>
    );
};

export default React.memo(FormNav);
