import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
    &.${(props) => props.activeClassName} {
        color: white !important;
        font-weight: bold;
    }
`;

const FormNav = () => {
    return (
        <div
            className="card-body"
            style={{ borderBottom: "1px solid #cfd5db" }}
        >
            <div className="nav nav-pills">
                <li className="nav-item">
                    <Link
                        to="/admin/movies/form"
                        className="nav-link"
                        activeClassName="active"
                    >
                        영화
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/admin/books/form"
                        className="nav-link"
                        activeClassName="active"
                    >
                        책
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/admin/tv_shows/form"
                        className="nav-link"
                        activeClassName="active"
                    >
                        TV
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/admin/participants/form"
                        className="nav-link"
                        activeClassName="active"
                    >
                        관계자
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/admin/collections/form"
                        className="nav-link"
                        activeClassName="active"
                    >
                        컬렉션
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/admin/tags/form"
                        className="nav-link"
                        activeClassName="active"
                    >
                        태그입력
                    </Link>
                </li>
            </div>
        </div>
    );
};

export default React.memo(FormNav);
