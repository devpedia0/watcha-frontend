import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import history from "../../history";

const HeaderDetail = ({ className, title, AddComponent }) => {
    const [scrolling, setScrolling] = useState(false);

    const scrollEvent = useCallback(() => {
        const scrollY = window.scrollY;
        if (!scrolling && scrollY > 80) {
            setScrolling(true);
        } else if (scrolling && scrollY <= 80) {
            setScrolling(false);
        }
    }, [scrolling]);

    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);

        return () => window.removeEventListener("scroll", scrollEvent);
    }, [scrollEvent]);
    return (
        <Wrapper className={className}>
            <HeaderBlock>
                <span className="icon-back" onClick={() => history.goBack()} />
                <p className={!scrolling ? "off" : ""}>{title}</p>
            </HeaderBlock>
            {!scrolling && (
                <div className={`scrolling ${scrolling && "off"}`}>{title}</div>
            )}

            {AddComponent}
        </Wrapper>
    );
};

export default HeaderDetail;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    background: #fff;
    box-sizing: border-box;
    font-size: 17px;
    letter-spacing: -0.5px;
    line-height: 22px;
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #e3e3e3;
    text-align: left;
    height: auto;

    .scrolling {
        padding: 0 16px;
        display: inline-block;
        font-size: 33px;
        font-weight: 700;
        letter-spacing: -1.2px;
        line-height: 40px;
        font-size: 22px;
        line-height: 29px;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        opacity: 1;

        &.off {
            opacity: 0;
        }
    }

    @media only screen and (min-width: 719px) {
        top: 62px;
    }
`;

const HeaderBlock = styled.div`
    display: flex;
    padding: 0 16px;
    .icon-back {
        background: none;
        padding: 0;
        width: 24px;
        height: 24px;
        margin: 10px 0;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9IiNGRjJGNkUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTYuNzU1IDExLjk4OGw0Ljk1OCA0Ljk1OGEuOTguOTggMCAxIDEtMS4zODcgMS4zODdMNCAxMi4wMDdsLjAwNS0uMDA1TDQgMTEuOTk3bDYuMzQzLTYuMzQzYS45Ny45NyAwIDEgMSAxLjM3MyAxLjM3M2wtNC45NjEgNC45NnoiLz4KICAgICAgICA8cGF0aCBkPSJNNiAxMWgxM2ExIDEgMCAwIDEgMCAySDZ2LTJ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=) !important;
        cursor: pointer;
    }
    p {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        white-space: nowrap;
        text-align: center;
        font-size: 17px;
        font-weight: 700;
        letter-spacing: -0.5px;
        line-height: 22px;
        margin: 11px 100px;
        overflow: hidden;
        opacity: 1;
        text-overflow: ellipsis;
        transition: 300ms ease;

        &.off {
            opacity: 0;
        }
    }
`;
