import React from "react";
import styled from "styled-components";
import useOpen from "../../Hooks/useOpen";

const ModalBookmark = ({ data }) => {
    const [isOpen, onClickOpen, onClickClose] = useOpen();

    return (
        <>
            <ButtonContainer>
                <ButtonBlock onClick={onClickOpen}>
                    <ButtonLeft>
                        <div className="btn-left-content">
                            <span src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1MC4yICg1NTA0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+NjMwMjYxNEEtQzhBMy00MkMwLTlDQzctQTBEQzNDOEM1NTVDPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJJY29ucy0mYW1wOy1Bc3NldHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJJY29uLS8tSWNBZGRXaGl0ZSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMyIgeD0iMTEiIHk9IjQuNSIgd2lkdGg9IjIiIGhlaWdodD0iMTUiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMy1Db3B5IiB4PSI0LjUiIHk9IjExIiB3aWR0aD0iMTUiIGhlaWdodD0iMiIgcng9IjEiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="></span>
                            <div className="text">보고싶어요</div>
                        </div>
                    </ButtonLeft>
                    <ButtonRight>
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
                    </ButtonRight>
                </ButtonBlock>
            </ButtonContainer>
            {isOpen && (
                <ModalContainer onClick={onClickClose}>
                    <ContentBox onClick={(e) => e.stopPropagation()}>
                        <ContentHeader>
                            <img src={data.imgUrl} alt="" />
                            <div className="titleWrapper">
                                <h2>{data.title}</h2>
                                <p>{`${data.category} ・ ${data.year}`}</p>
                            </div>
                        </ContentHeader>
                        <ContentRow status={data.status}>
                            <div className="contentRowLeft">
                                <div className="imageWish" alt="" />
                                <span>보고 싶어요</span>
                            </div>
                            <div className="contentRowRight">
                                <div className="imageWish" alt="" />
                                <span>보는중</span>
                            </div>
                        </ContentRow>

                        <ContentButton>
                            <span>코멘트 작성하기</span>
                            <div className="iconComment" />
                        </ContentButton>
                        <ContentButton>
                            <span>관심없어요</span>
                            <div className="iconCancel" />
                        </ContentButton>
                        <ContentFooter>취소</ContentFooter>
                    </ContentBox>
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

    @media only screen and (min-width: 719px) {
        width: 213px;
    }
    @media only screen and (min-width: 1023px) {
        width: 254px;
    }
`;

const ButtonLeft = styled.button`
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
`;

const ButtonRight = styled.button`
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
    overflow: auto;

    @media only screen and (min-width: 719px) {
        text-align: center;
        padding: 20px 0px;
        overflow: auto;
        vertical-align: middle;
    }
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

    padding: 0 20px;

    @media only screen and (min-width: 719px) {
        display: inline-block;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        vertical-align: middle;
        text-align: left;
        width: 375px;
        height: auto;
        border-radius: 6px;
        overflow: auto;
        margin: auto 0;
    }
`;

const ContentHeader = styled.div`
    display: flex;
    border-bottom: 1px solid rgb(240, 240, 240);

    img {
        position: relative;
        overflow: hidden;
        background: rgb(248, 248, 248);
        width: 48px;
        height: 68px;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 3px;
        margin: 20px 14px 20px 0px;
        background-repeat: no-repeat;
        background-size: cover;
        background: ${(props) =>
            props.src
                ? `url(${props.src}) center center / cover no-repeat`
                : "#f1f1f1"};
    }
    .titleWrapper {
        display: flex;
        flex: 1 1 0%;
        flex-direction: column;
        justify-content: center;
        padding: 10px 0px;

        h2 {
            color: rgb(0, 0, 0);
            font-size: 19px;
            font-weight: 700;
            letter-spacing: -0.7px;
            line-height: 28px;
        }

        p {
            color: rgb(120, 120, 120);
            font-size: 15px;
            font-weight: 400;
            letter-spacing: -0.5px;
            line-height: 20px;
        }
    }
`;

const ContentRow = styled.div`
    border-bottom: 1px solid rgb(240, 240, 240);

    .contentRowLeft {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.5px;
        line-height: 20px;
        box-sizing: border-box;
        width: 50%;
        padding: 13px 0px 15px;
        cursor: pointer;
        border-right: 1px solid rgb(240, 240, 240);
        color: ${(props) =>
            props.status === "wish" ? "rgb(255, 47, 110)" : "rgb(0, 0, 0)"};

        .imageWish {
            width: 48px;
            height: 48px;
            background: ${(props) =>
                props.status === "wish"
                    ? `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGMkY2RSIgZD0iTTM4Ljc1IDguODJIOS4yNWEuNS41IDAgMCAxLS41LS41VjYuNDRhMiAyIDAgMCAxIDItMmgyNi41YTIgMiAwIDAgMSAyIDJ2MS44OGEuNS41IDAgMCAxLS41LjV6bS0yOS41IDEuNWEuNS41IDAgMCAwLS41LjV2MjguNDY4YzAgMS4xOC45NjkgMi4wMDMgMi4wMDcgMi4wMDMuMzkgMCAuNzktLjExNyAxLjE1My0uMzc0TDI0IDMyLjMwN2wxMi4wOSA4LjYxYTEuOTggMS45OCAwIDAgMCAxLjE1My4zNzRjMS4wMzggMCAyLjAwNy0uODIzIDIuMDA3LTIuMDAzVjEwLjgyYS41LjUgMCAwIDAtLjUtLjVIOS4yNXoiLz4KICAgIDwvZz4KPC9zdmc+Cg==) center center / cover no-repeat`
                    : `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgNDhoNDhWMEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3ODc4NzgiIGQ9Ik0zNy4yNSA0LjQ0aC0yNi41YTIgMiAwIDAgMC0yIDJ2MzIuODQ3YzAgMS4xODEuOTcgMi4wMDQgMi4wMDcgMi4wMDQuMzkgMCAuNzktLjExNyAxLjE1My0uMzc1TDI0IDMyLjMwN2wxMi4wOSA4LjYxYy4zNjIuMjU3Ljc2My4zNzQgMS4xNTMuMzc0IDEuMDM4IDAgMi4wMDctLjgyMyAyLjAwNy0yLjAwNFY2LjQ0YTIgMiAwIDAgMC0yLTJtMCAxLjVhLjUuNSAwIDAgMSAuNS41djMyLjg0N2MwIC4zNDctLjI5Ni41MDQtLjUwNy41MDRhLjQ3Ny40NzcgMCAwIDEtLjI4My0uMDk3bC0xMi4wOS04LjYwOGExLjQ5MSAxLjQ5MSAwIDAgMC0xLjc0IDBsLTEyLjA5IDguNjA4YS40NzcuNDc3IDAgMCAxLS4yODMuMDk3Yy0uMjEgMC0uNTA3LS4xNTctLjUwNy0uNTA0VjYuNDRjMC0uMjc1LjIyNS0uNS41LS41aDI2LjUiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNzg3ODc4IiBkPSJNOS41MjUgMTAuMzE5aDI4Ljk0OXYtMS41SDkuNTI1eiIvPgogICAgPC9nPgo8L3N2Zz4K) center center / cover no-repeat`};
        }
    }

    .contentRowRight {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.5px;
        line-height: 20px;
        box-sizing: border-box;
        width: 50%;
        padding: 13px 0px 15px;
        cursor: pointer;

        color: ${(props) =>
            props.status === "watching" ? "RGB(0,160,255)" : "rgb(0, 0, 0)"};

        .imageWish {
            width: 48px;
            height: 48px;
            background: ${(props) =>
                props.status === "watching"
                    ? `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzAwQTBGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNCAxOC43NUE1LjI1NiA1LjI1NiAwIDAgMCAxOC43NSAyNGEuNzUuNzUgMCAwIDEtMS41IDBBNi43NTggNi43NTggMCAwIDEgMjQgMTcuMjVhLjc1Ljc1IDAgMCAxIDAgMS41bTAtNGMtNS4xMDEgMC05LjI1IDQuMTUtOS4yNSA5LjI1IDAgNS4xMDEgNC4xNDkgOS4yNSA5LjI1IDkuMjUgNS4xIDAgOS4yNS00LjE0OSA5LjI1LTkuMjUgMC01LjEtNC4xNS05LjI1LTkuMjUtOS4yNSIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMjQgMzQuNzVjLTUuOTI4IDAtMTAuNzUtNC44MjItMTAuNzUtMTAuNzVTMTguMDcyIDEzLjI1IDI0IDEzLjI1IDM0Ljc1IDE4LjA3MiAzNC43NSAyNCAyOS45MjggMzQuNzUgMjQgMzQuNzVtMjIuNTY1LTEyLjY1N0M0Mi40NzUgMTMuNDUzIDMzLjkxMyA3LjUgMjQgNy41Yy05LjkxMiAwLTE4LjQ3NSA1Ljk1My0yMi41NjQgMTQuNTkzYTQuNDYgNC40NiAwIDAgMCAwIDMuODE0QzUuNTI1IDM0LjU0NyAxNC4wODggNDAuNSAyNCA0MC41YzkuOTEzIDAgMTguNDc2LTUuOTU0IDIyLjU2NS0xNC41OTNhNC40NjcgNC40NjcgMCAwIDAgMC0zLjgxNCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==) center center / cover no-repeat`
                    : `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzc4Nzg3OCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNCAxNC43NWMtNS4xMDEgMC05LjI1IDQuMTQ5LTkuMjUgOS4yNXM0LjE0OSA5LjI1IDkuMjUgOS4yNWM1LjEgMCA5LjI1LTQuMTQ5IDkuMjUtOS4yNVMyOS4xIDE0Ljc1IDI0IDE0Ljc1bTAgMjBjLTUuOTI4IDAtMTAuNzUtNC44MjItMTAuNzUtMTAuNzVTMTguMDcyIDEzLjI1IDI0IDEzLjI1IDM0Ljc1IDE4LjA3MiAzNC43NSAyNCAyOS45MjggMzQuNzUgMjQgMzQuNzUiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTE4IDI0Ljc1YS43NS43NSAwIDAgMS0uNzUtLjc1QTYuNzU4IDYuNzU4IDAgMCAxIDI0IDE3LjI1YS43NS43NSAwIDAgMSAwIDEuNUE1LjI1NiA1LjI1NiAwIDAgMCAxOC43NSAyNGEuNzUuNzUgMCAwIDEtLjc1Ljc1Ii8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNCA3LjVjLTkuOTEyIDAtMTguNDc1IDUuOTU0LTIyLjU2NCAxNC41OTNhNC40NiA0LjQ2IDAgMCAwIDAgMy44MTRDNS41MjUgMzQuNTQ2IDE0LjA4OCA0MC41IDI0IDQwLjVjOS45MTIgMCAxOC40NzUtNS45NTQgMjIuNTY0LTE0LjU5M2E0LjQ2NyA0LjQ2NyAwIDAgMCAwLTMuODE0QzQyLjQ3NSAxMy40NTQgMzMuOTEzIDcuNSAyNCA3LjVNMjQgOWM4LjkzOCAwIDE2Ljk1IDUuMTAzIDIxLjAyMyAxMy4zNTJhMy43MjYgMy43MjYgMCAwIDEgMCAzLjI5NUM0MC45NTMgMzMuODk3IDMyLjkzOSAzOSAyNCAzOWMtOC45NCAwLTE2Ljk1My01LjEwMy0yMS4wMjQtMTMuMzUyYTMuNzI4IDMuNzI4IDAgMCAxIDAtMy4yOTZDNy4wNDcgMTQuMTAzIDE1LjA2MiA5IDI0IDkiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=) center center / cover no-repeat`};
        }
    }
`;

const ContentButton = styled.div`
    display: inline-flex;
    align-items: center;
    color: rgb(0, 0, 0);
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 20px;
    width: 100%;
    border-bottom: 1px solid rgb(240, 240, 240);
    cursor: pointer;

    span {
        flex: 1 1 0%;
        text-align: left;
    }

    .iconComment {
        width: 32px;
        height: 32px;
        margin: 12px 0px;
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiM3ODc4NzgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuODU3IDE3Ljc4Nkw2IDIxdi00LjkxYy0xLjg0MS0xLjM3My0zLTMuMzY5LTMtNS41OUMzIDYuMzU4IDcuMDMgMyAxMiAzczkgMy4zNTggOSA3LjVjMCA0LjE0Mi00LjAzIDcuNS05IDcuNS0uNzM5IDAtMS40NTYtLjA3NC0yLjE0My0uMjE0eiIvPgo8L3N2Zz4K)
            center center / cover no-repeat;
    }

    .iconCancel {
        width: 32px;
        height: 32px;
        margin: 12px 0px;
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3ODc4NzgiIGQ9Ik02LjA4MyA3LjY2NmE3LjMzMyA3LjMzMyAwIDAgMCAxMC4yNSAxMC4yNUw2LjA4NCA3LjY2N3pNNy40NzUgNi4yM0wxNy43NyAxNi41MjVBNy4zMzMgNy4zMzMgMCAwIDAgNy40NzUgNi4yM3pNMTIgMjEuMzMzYTkuMzMzIDkuMzMzIDAgMSAxIDAtMTguNjY2IDkuMzMzIDkuMzMzIDAgMCAxIDAgMTguNjY2eiIvPgogICAgPC9nPgo8L3N2Zz4K)
            center center / cover no-repeat;
    }
`;

const ContentFooter = styled.div`
    align-items: center;
    font-size: 15px;
    letter-spacing: -0.5px;
    line-height: 20px;
    border-bottom: 1px solid rgb(240, 240, 240);
    cursor: pointer;
    display: inline-block;
    color: rgb(255, 47, 110);
    font-weight: 500;
    text-align: center;
    width: 100%;
    padding: 15px 0px;
`;

export default ModalBookmark;
