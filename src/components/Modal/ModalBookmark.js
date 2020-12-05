import React from "react";
import styled from "styled-components";
import useOpen from "../../Hooks/useOpen";

const ModalBookmark = () => {
    const data = {
        title: "이웃사촌",
        category: "영화",
        year: "2020",
        status: "watching",
        imgUrl:
            "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1605487645/ciydhyimcw07k4e516hu.jpg",
    };

    const [isOpen, onClickOpen, onClickClose] = useOpen();

    return (
        <>
            <ButtonContainer>
                <ButtonBlock onClick={onClickOpen}>
                    <button className="btn-left" type="button">
                        <div className="btn-left-content">
                            <span src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1MC4yICg1NTA0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+NjMwMjYxNEEtQzhBMy00MkMwLTlDQzctQTBEQzNDOEM1NTVDPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJJY29ucy0mYW1wOy1Bc3NldHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJJY29uLS8tSWNBZGRXaGl0ZSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMyIgeD0iMTEiIHk9IjQuNSIgd2lkdGg9IjIiIGhlaWdodD0iMTUiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMy1Db3B5IiB4PSI0LjUiIHk9IjExIiB3aWR0aD0iMTUiIGhlaWdodD0iMiIgcng9IjEiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="></span>
                            <div className="text">보고싶어요</div>
                        </div>
                    </button>
                    <button className="btn-right" type="button">
                        <svg
                            fill=""
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="css-mqyjrp-ArrowDropDownSvg e1rlg27m0"
                        >
                            <path
                                fill="#FFF"
                                fillRule="evenodd"
                                d="M12 16l6-6H6z"
                            ></path>
                        </svg>
                    </button>
                </ButtonBlock>
            </ButtonContainer>
            {isOpen && (
                <ModalContainer onClick={onClickClose}>
                    <ContentBox
                        onClick={(e) => e.stopPropagation()}
                    ></ContentBox>
                </ModalContainer>
            )}
        </>
    );
};

const ButtonContainer = styled.div`
    margin: 19px 0 14px;

    @media only screen and (min-width: 719px) {
        float: left;
        margin: 39px 21px 0 0;
    }
    @media only screen and (min-width: 1023px) {
        float: left;
        margin: 39px 30px 0 0;
    }
`;

const ButtonBlock = styled.div`
    display: flex;
    background: #ff2f6e;
    vertical-align: top;
    box-sizing: border-box;
    width: 254px;
    height: 40px;
    border-radius: 6px;
    margin: 0 auto;
    overflow: hidden;

    .btn-left {
        background: none;
        padding: 0;
        border: none;
        margin: 0;
        cursor: pointer;
        flex: 1;
        color: #f6f6f6;
        text-align: center;
        font-size: 17px;
        font-weight: 500;
        letter-spacing: -0.7px;
        line-height: 22px;
        height: 100%;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;

        .btn-left-content {
            display: flex;
            position: relative;
            left: -8px;
            justify-content: center;
            align-items: center;
            span {
                display: inline-block;
                background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1MC4yICg1NTA0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+NjMwMjYxNEEtQzhBMy00MkMwLTlDQzctQTBEQzNDOEM1NTVDPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJJY29ucy0mYW1wOy1Bc3NldHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJJY29uLS8tSWNBZGRXaGl0ZSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMyIgeD0iMTEiIHk9IjQuNSIgd2lkdGg9IjIiIGhlaWdodD0iMTUiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMy1Db3B5IiB4PSI0LjUiIHk9IjExIiB3aWR0aD0iMTUiIGhlaWdodD0iMiIgcng9IjEiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==)
                    no-repeat center;
                background-size: contain;
                width: 24px;
                height: 24px;
                margin: 0 6px 0 0;
                -webkit-transition: 300ms;
                transition: 300ms;
            }
        }

        &:hover {
            span {
                transform: rotate(90deg);
            }
        }
    }

    .btn-right {
        background: none;
        padding: 0;
        border: none;
        margin: 0;
        cursor: pointer;
        display: inline-block;
        vertical-align: top;
        text-align: center;
        box-sizing: border-box;
        width: 51px;
        height: 100%;
        padding: 8px 0;
        border-left: 1px solid #e71252;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        cursor: pointer;

        svg {
            width: 24px;
            height: 24px;
            transition: 300ms ease;
        }

        &:hover {
            svg {
                transform: translateY(4px);
            }
        }
    }

    @media only screen and (min-width: 719px) {
        width: 213px;
    }
    @media only screen and (min-width: 1023px) {
        width: 254px;
    }
`;

const ModalContainer = styled.div`
    display: block;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 100;
    background: rgba(0, 0, 0, 0.56);
    overflow: hidden scroll;

    text-align: center;
    padding: 20px 0px;
`;

const ContentBox = styled.div`
    background: rgb(255, 255, 255);
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 6px 0px;
    overflow: hidden;
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: auto;

    @media only screen and (min-width: 719px) {
        display: inline-block;
        position: relative;
        vertical-align: middle;
        text-align: left;
        width: 375px;
        height: auto;
        min-height: 540px;
        border-radius: 6px;
        overflow: auto;
    }
`;

export default ModalBookmark;
