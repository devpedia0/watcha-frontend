import React from "react";
import styled, { css } from "styled-components";
import { Stars, Svg } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { contentActions, modalActions } from "../../../../redux/actions";

const ContentsInfo = () => {
    const dispatch = useDispatch();
    const {
        data: {
            contentInfo: {
                mainTitle,
                subTitle,
                productionDate,
                category,
                countryCode,
                page,
            },
            scores: { average, totalCount },
        },
        userData: { interestState, isLogin },
    } = useSelector((state) => state.content);

    const handleClickOpen = () => {
        if (!isLogin) {
            return dispatch(modalActions.setModal("needLoginInterest"));
        }

        return interestState
            ? dispatch(modalActions.setModal("interest"))
            : dispatch(contentActions.changeInterestState("WISH"));
    };

    return (
        <Wrapper>
            <div className="infoList">
                <div className="title">{mainTitle}</div>
                <div className="detail">
                    {productionDate ? productionDate.split("-")[0] : ""}
                    {category ? " ・ " + category : ""}
                    {countryCode ? " ・ " + countryCode : ""}
                    {page ? " ・ " + page + "p" : ""}
                </div>
                <div className="rating">
                    평균 ★{average.toFixed(1)} ({totalCount} 명)
                </div>
                <ButtonContainer>
                    <ButtonBlock
                        isClicked={!!interestState}
                        onClick={handleClickOpen}
                    >
                        <button className="btn-left">
                            <div className="btn-left-content">
                                <IconSelector status={interestState} />

                                <div className="text">
                                    {interestState === "WATCHING"
                                        ? "보는중"
                                        : "보고싶어요"}
                                </div>
                            </div>
                        </button>
                        <button className="btn-right">
                            <Svg
                                type={interestState ? "arrowGray" : "arrow"}
                                w="24px"
                                h="24px"
                            />
                        </button>
                    </ButtonBlock>
                </ButtonContainer>
                <Stars />
            </div>
        </Wrapper>
    );
};

export default ContentsInfo;

const Wrapper = styled.div`
    margin: 0 auto;
    text-align: center;
    padding: 14px 16px 22px;
    height: auto;
    overflow: hidden;

    .infoList {
        @media only screen and (min-width: 719px) {
            text-align: left;
            margin: 0 0 0 173px;
        }

        @media only screen and (min-width: 1023px) {
            margin: 0 0 0 191px;
        }
    }

    .title {
        font-size: 25px;
        font-weight: 700;
        letter-spacing: -0.9px;
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;

        @media only screen and (min-width: 719px) {
            width: 520px;
        }
        @media only screen and (min-width: 1023px) {
            font-size: 33px;
            font-weight: 700;
            letter-spacing: -1.2px;
            line-height: 40px;
        }
    }

    .detail {
        color: rgba(0, 0, 0, 0.5);
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.5px;
        line-height: 20px;
        box-sizing: border-box;
        margin-top: 3px;

        @media only screen and (min-width: 1023px) {
            font-size: 17px;
            font-weight: 400;
            letter-spacing: -0.7px;
            line-height: 22px;
            margin-top: 4px;
        }
    }

    .rating {
        color: #282828;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.5px;
        line-height: 20px;
        white-space: pre-wrap;
        box-sizing: border-box;
        padding: 7px 0;
        border-top: 1px solid #ededed;
        border-bottom: 1px solid #ededed;
        margin-top: 14px;

        @media only screen and (min-width: 1023px) {
            font-size: 17px;
            font-weight: 400;
            letter-spacing: -0.7px;
            line-height: 22px;
            padding: 8px 0;
        }
    }
    @media only screen and (min-width: 719px) {
        max-width: 640px;
    }

    @media only screen and (min-width: 1023px) {
        max-width: 960px;
    }
`;

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
    background: ${(props) => (props.isClicked ? "#f6f6f6" : "#ff2f6e")};
    border: ${(props) => (props.isClicked ? "1px solid #ebebeb" : "")};
    display: flex;
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
        color: ${(props) => (props.isClicked ? "#000" : "#f6f6f6")};
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
        }

        &:hover {
            ${(props) =>
                !props.isClicked &&
                css`
                    span {
                        transform: rotate(90deg);
                    }
                `}
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
        border-left: ${(props) => (props.isClicked ? "#f6f6f6" : "#e71252")};
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

const IconSelector = styled.span`
    display: inline-block;
    background: ${(props) =>
        props.status === "WISH"
            ? "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI0ZGMkY2RSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01LjgzNCAyNi4xOTFjMCAuNzg4LjY0NiAxLjMzNiAxLjMzOCAxLjMzNi4yNiAwIC41MjctLjA3OC43NjgtLjI1TDE2IDIxLjUzOGw4LjA2IDUuNzRjLjI0Mi4xNzEuNTA4LjI1Ljc2OS4yNS42OTIgMCAxLjMzOC0uNTQ5IDEuMzM4LTEuMzM3VjguNjNhLjUuNSAwIDAgMC0uNS0uNUg2LjMzNGEuNS41IDAgMCAwLS41LjV2MTcuNTYyek0yNi4xNjcgNC4yOTRjMC0uNzM2LS41OTctMS4zMzMtMS4zMzMtMS4zMzNINy4xNjdjLS43MzYgMC0xLjMzMy41OTYtMS4zMzMgMS4zMzNWNi4xM2EuNS41IDAgMCAwIC41LjVoMTkuMzMzYS41LjUgMCAwIDAgLjUtLjVWNC4yOTR6Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K) center center / contain no-repeat"
            : props.status === "WATCHING"
            ? "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzAwQTBGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNiAxMi43NUEzLjI1NCAzLjI1NCAwIDAgMCAxMi43NSAxNmEuNzUuNzUgMCAwIDEtMS41IDBBNC43NTYgNC43NTYgMCAwIDEgMTYgMTEuMjVhLjc1Ljc1IDAgMCAxIDAgMS41bTAtMi42NjdBNS45MjQgNS45MjQgMCAwIDAgMTAuMDgzIDE2IDUuOTI0IDUuOTI0IDAgMCAwIDE2IDIxLjkxNyA1LjkyNCA1LjkyNCAwIDAgMCAyMS45MTYgMTYgNS45MjQgNS45MjQgMCAwIDAgMTYgMTAuMDgzIi8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNiAyMy40MTZjLTQuMDkgMC03LjQxNy0zLjMyNy03LjQxNy03LjQxNyAwLTQuMDg5IDMuMzI3LTcuNDE2IDcuNDE3LTcuNDE2UzIzLjQxNiAxMS45MSAyMy40MTYgMTZjMCA0LjA5LTMuMzI3IDcuNDE3LTcuNDE2IDcuNDE3bTE1LjA2LTguNjU0QzI4LjM0IDguOTg0IDIyLjYyMSA1IDE2IDUgOS4zNzggNSAzLjY2MSA4Ljk4NC45NCAxNC43NjJhMi45MzQgMi45MzQgMCAwIDAgMCAyLjQ3NUMzLjY2MSAyMy4wMTUgOS4zNzggMjcgMTYgMjdjNi42MjEgMCAxMi4zNC0zLjk4NCAxNS4wNi05Ljc2MmEyLjkzNCAyLjkzNCAwIDAgMCAwLTIuNDc1Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K) center center / contain no-repeat"
            : "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1MC4yICg1NTA0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+NjMwMjYxNEEtQzhBMy00MkMwLTlDQzctQTBEQzNDOEM1NTVDPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJJY29ucy0mYW1wOy1Bc3NldHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJJY29uLS8tSWNBZGRXaGl0ZSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMyIgeD0iMTEiIHk9IjQuNSIgd2lkdGg9IjIiIGhlaWdodD0iMTUiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMy1Db3B5IiB4PSI0LjUiIHk9IjExIiB3aWR0aD0iMTUiIGhlaWdodD0iMiIgcng9IjEiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==) no-repeat center"};

    background-size: contain;
    width: 24px;
    height: 24px;
    margin: 0 6px 0 0;
    -webkit-transition: 300ms;
    transition: 300ms;
`;
