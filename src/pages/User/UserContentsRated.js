import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import useIntersection from "../../Hooks/useIntersection";
import { useDispatch, useSelector } from "react-redux";
import { detailActions, modalActions } from "../../redux/actions";
import { CardList, HeaderDetail, CardPoster } from "../../components";
import { Loader } from "../../styles";
import ModalSelect from "./Components/Modals/ModalSelect";

const translateObj = {
    AVG_SCORE: "평점 순",
    TITLE: "가나다 순",
    NEW: "개봉일 순",
};

const UserContentsRated = ({ match }) => {
    const { userId, contentType } = match.params;
    const [page, setPage] = useState("total");
    const [selected, setSelected] = useState("AVG_SCORE");

    const dispatch = useDispatch();
    const modal = useSelector((state) => state.modal);
    const { data, initFetch, isFetching, fetchMore } = useSelector(
        (state) => state.detail
    );

    useEffect(() => {
        const fetchUrl = `/users/${userId}/${contentType}/ratings?order=${selected}`;
        dispatch(detailActions.initContentRated(fetchUrl, 20));
        return () => dispatch(detailActions.initialize());
    }, [dispatch, userId, contentType, selected]);

    const loaderRef = useRef();
    const [isIntersecting] = useIntersection(loaderRef, initFetch);

    useEffect(() => {
        if (isIntersecting && fetchMore) {
            const fetchUrl = `/users/${userId}/${contentType}/ratings?order=${selected}`;
            dispatch(detailActions.fetchMore(fetchUrl));
        }
    }, [isIntersecting, fetchMore, dispatch, userId, contentType, selected]);

    return (
        <Wrapper>
            <StyledHeader
                title="평가한 작품들"
                AddComponent={
                    <>
                        <ButtonsWrapper>
                            <li className="type">전체</li>
                            <li className="type">별점 순</li>
                        </ButtonsWrapper>
                        <SelectWrapper
                            onClick={() =>
                                dispatch(modalActions.setModal("select"))
                            }
                        >
                            <span className="dropDown"></span>
                            <span className="dropTitle">
                                {translateObj[selected]}
                            </span>
                        </SelectWrapper>
                    </>
                }
            />
            {!initFetch ? (
                <Loader height="800px" />
            ) : (
                <CardList>
                    {data.map((item, idx) => (
                        <StyledCard key={idx} item={item} />
                    ))}
                </CardList>
            )}

            <StyledLoader ref={loaderRef}>
                {isFetching && <Loader />}
            </StyledLoader>

            {modal === "select" && (
                <ModalSelect
                    title="평가한 작품들"
                    selected={selected}
                    onClickRow={(ctg) => setSelected(ctg)}
                    onCloseModal={() => dispatch(modalActions.closeModal())}
                />
            )}
        </Wrapper>
    );
};

export default UserContentsRated;

const Wrapper = styled.div`
    margin: 200px 20px;
    background: ${(props) => props.theme.bgGray};
`;
const StyledHeader = styled(HeaderDetail)`
    border: none;
`;

const StyledCard = styled(CardPoster)`
    width: 33.3333333%;
    margin-bottom: 30px;

    @media only screen and (min-width: 520px) {
        width: 25%;
    }
    @media only screen and (min-width: 680) {
        width: 20%;
    }
    @media only screen and (min-width: 840px) {
        width: 16.6667%;
    }
    @media only screen and (min-width: 960px) {
        width: 14.2857%;
    }
    @media only screen and (min-width: 1100px) {
        width: 12.5%;
    }
    @media only screen and (min-width: 1200px) {
        width: 11.1111%;
    }
    @media only screen and (min-width: 1360px) {
        width: 10%;
    }
    @media only screen and (min-width: 1600px) {
        width: 9.09%;
    }
`;

const StyledLoader = styled.div`
    height: 50px;
`;

const ButtonsWrapper = styled.ul`
    list-style: none;
    margin: 0px;
    display: flex;
    align-items: flex-end;
    background: rgb(255, 255, 255);
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    padding: 0px 16px;

    @media (min-width: 719px) {
        width: 335px;
    }

    .type {
        display: inline-flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: -0.5px;
        line-height: 20px;
        min-width: 48px;
        height: 44px;
        cursor: pointer;
        box-sizing: border-box;
        width: 50%;
        color: rgb(255, 47, 110);
        border-bottom: 3px solid rgb(255, 47, 110);
    }
`;

const SelectWrapper = styled.div`
    background: ${(props) => props.theme.bgGray};
    padding: 0px 16px;
    border: none;
    margin: 0px;
    height: 50px;

    cursor: pointer;
    border-top: 1px solid ${(props) => props.theme.line};
    display: flex;
    align-items: center;

    .dropDown {
        display: inline-block;
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNBMEEwQTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjY2MyAxNS44N2wtNS40OTQtNWEuNS41IDAgMCAxIC4zMzctLjg3aDEwLjk4OGEuNS41IDAgMCAxIC4zMzcuODdsLTUuNDk0IDVhLjUuNSAwIDAgMS0uNjc0IDB6Ii8+Cjwvc3ZnPgo=)
            center center / contain no-repeat;
        width: 24px;
        height: 24px;
        vertical-align: top;
    }

    .dropTitle {
        color: rgb(0, 0, 0);
        font-size: 15px;
        font-weight: 500;
        letter-spacing: -0.5px;
        line-height: 30px;
        margin: 3px 0px 0px 2px;
    }
`;

// const Section = styled.section`
//     padding-top: 0px;
//     padding-bottom: 56px;

//     @media (min-width: 719px) {
//         padding-top: 62px;
//         padding-bottom: unset;
//     }

//     .header {
//         position: fixed;
//         z-index: 50;
//         background: rgb(255, 255, 255);
//         width: 100%;
//         border-bottom: 1px solid rgb(210, 210, 210);

//         .headerTitle {
//             left: 0px;
//             z-index: 50;
//             background: rgb(255, 255, 255);
//             box-sizing: border-box;
//             font-size: 17px;
//             font-weight: 700;
//             letter-spacing: -0.5px;
//             line-height: 22px;
//             width: 100%;
//             padding: 0px 16px;
//             text-align: left;
//             height: auto;
//             position: relative;
//             border: 0px;
//             top: 0px !important;

//             .backBtn {
//                 display: flex;
//                 -webkit-box-pack: justify;
//                 justify-content: space-between;

//                 .btnIcon {
//                     background-position: initial;
//                     background-size: initial;
//                     background-repeat: initial;
//                     background-attachment: initial;
//                     background-origin: initial;
//                     background-clip: initial;
//                     background-color: initial;
//                     padding: 0px;
//                     border: none;
//                     cursor: pointer;
//                     width: 24px;
//                     height: 24px;
//                     margin: 10px 0px;
//                     background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9IiNGRjJGNkUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTYuNzU1IDExLjk4OGw0Ljk1OCA0Ljk1OGEuOTguOTggMCAxIDEtMS4zODcgMS4zODdMNCAxMi4wMDdsLjAwNS0uMDA1TDQgMTEuOTk3bDYuMzQzLTYuMzQzYS45Ny45NyAwIDEgMSAxLjM3MyAxLjM3M2wtNC45NjEgNC45NnoiLz4KICAgICAgICA8cGF0aCBkPSJNNiAxMWgxM2ExIDEgMCAwIDEgMCAySDZ2LTJ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=) !important;
//                 }
//             }
//             .largeTitleBlock {
//                 display: flex;
//                 transform: translate3d(0px, 0px, 0px);
//                 -webkit-box-pack: center;
//                 justify-content: center;
//                 -webkit-box-align: center;
//                 align-items: center;
//                 height: 30px;
//                 margin: 0px 4px 10px;
//                 opacity: 1;
//                 transition: all 150ms ease 0s;

//                 .largeTitle {
//                     display: inline-block;
//                     font-weight: 700;
//                     letter-spacing: -1.2px;
//                     font-size: 22px;
//                     line-height: 29px;
//                     white-space: nowrap;
//                     width: 100%;
//                     overflow: hidden;
//                     text-overflow: ellipsis;
//                 }
//             }

//             .smallTitle {
//                 position: absolute;
//                 top: 0px;
//                 right: 0px;
//                 left: 0px;
//                 white-space: nowrap;
//                 text-align: center;
//                 font-size: 17px;
//                 font-weight: 700;
//                 letter-spacing: -0.5px;
//                 line-height: 22px;
//                 margin: 11px 100px;
//                 overflow: hidden;
//                 text-overflow: ellipsis;
//                 opacity: 0;
//                 transition: all 300ms ease 0s;
//             }
//         }

//         .category {
//             list-style: none;
//             margin: 0px;
//             display: flex;
//             align-items: flex-end;
//             background: rgb(255, 255, 255);
//             box-sizing: border-box;
//             width: 100%;
//             height: 48px;
//             padding: 0px 16px;

//             @media (min-width: 719px) {
//                 width: 335px;
//             }

//             .type {
//                 display: inline-flex;
//                 -webkit-box-pack: center;
//                 justify-content: center;
//                 -webkit-box-align: center;
//                 align-items: center;
//                 font-size: 15px;
//                 font-weight: 500;
//                 letter-spacing: -0.5px;
//                 line-height: 20px;
//                 min-width: 48px;
//                 height: 44px;
//                 cursor: pointer;
//                 box-sizing: border-box;
//                 width: 50%;
//                 color: rgb(255, 47, 110);
//                 border-bottom: 3px solid rgb(255, 47, 110);

//                 /* color: rgb(120, 120, 120);
//     font-weight: 400
//     padding: 0px 0px 3px; */
//             }
//         }

//         .filterBar {
//             display: flex;
//             -webkit-box-align: center;
//             align-items: center;
//             background: rgb(251, 251, 251);
//             height: 48px;
//             position: absolute;
//             bottom: -49px;
//             width: 100%;

//             .margin {
//                 margin: 0px 20px;

//                 .downArrow {
//                     background: none;
//                     padding: 0px;
//                     border: none;
//                     margin: 0px;
//                     cursor: pointer;

//                     .dropDown {
//                         display: inline-block;
//                         background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNBMEEwQTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjY2MyAxNS44N2wtNS40OTQtNWEuNS41IDAgMCAxIC4zMzctLjg3aDEwLjk4OGEuNS41IDAgMCAxIC4zMzcuODdsLTUuNDk0IDVhLjUuNSAwIDAgMS0uNjc0IDB6Ii8+Cjwvc3ZnPgo=)
//                             center center / contain no-repeat;
//                         width: 24px;
//                         height: 24px;
//                         vertical-align: top;
//                     }

//                     .dropTitle {
//                         color: rgb(0, 0, 0);
//                         font-size: 15px;
//                         font-weight: 400;
//                         letter-spacing: -0.5px;
//                         line-height: 30px;
//                         margin: 3px 0px 0px 2px;
//                     }
//                 }
//             }
//         }
//     }
// `;

// const Content = styled.section`
//     padding: 189px 0px 0px;
//     display: block;

//     .allScreen {
//         padding: 10px 0px 0px;
//         .margin {
//             margin: 0px 20px;
//         }
//     }

//     .scrollBarContainer {
//         position: relative;
//         -webkit-transform: translate3d(0, 0, 0);
//         -ms-transform: translate3d(0, 0, 0);
//         transform: translate3d(0, 0, 0);

//         .scrollBar {
//             overflow-x: auto;
//             overflow-y: hidden;
//             -webkit-overflow-scrolling: touch;

//             .scrollingInner {
//                 -webkit-transition: 500ms;
//                 transition: 500ms;
//                 .scrollRow {
//                     margin: 0px 20px;
//                 }
//             }
//         }

//         .cheatBlock {
//             display: none;
//             position: absolute;
//             top: 0;
//             z-index: 1;
//             left: 0;
//             background-color: #fff;
//             width: 0;
//             height: 100%;
//         }

//         .arrow_left {
//             display: none;
//             position: absolute;
//             top: 0px;
//             z-index: 2;
//             left: 10px;
//             -webkit-box-align: center;
//             align-items: center;
//             height: 100%;
//             opacity: 0;
//             transition: all 300ms ease 0s;

//             .backward {
//                 background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDYgOCkiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMjkyQTMyIiBzdHJva2U9IiMyOTJBMzIiIHN0cm9rZS13aWR0aD0iLjM1IiBkPSJNMy40MjkgMTMuNDA5TDQuMzU0IDE0LjI1OCAxMC42OCA4LjQ2IDExLjE0MyA4LjAzNiA0LjM1NCAxLjgxMyAzLjQyOSAyLjY2MiA5LjI5MSA4LjAzNnoiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA2IDgpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=")
//                     12px center / 12px no-repeat rgb(255, 255, 255);
//                 box-sizing: border-box;
//                 border: 1px solid rgb(249, 249, 249);
//                 border-radius: 50%;
//                 box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 0px;
//                 width: 34px;
//                 height: 34px;
//                 cursor: pointer;
//                 transition: opacity 300ms ease 0s;
//             }
//         }

//         .arrow_right {
//             display: flex;
//             position: absolute;
//             top: 0px;
//             z-index: 2;
//             right: 10px;
//             -webkit-box-align: center;
//             align-items: center;
//             height: 100%;
//             opacity: 0;
//             transition: all 300ms ease 0s;

//             .forward {
//                 display: flex;
//                 -webkit-box-pack: center;
//                 justify-content: center;
//                 -webkit-box-align: center;
//                 align-items: center;
//                 background-color: rgb(255, 255, 255);
//                 box-sizing: border-box;
//                 border: 1px solid rgb(249, 249, 249);
//                 border-radius: 50%;
//                 box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 0px;
//                 background-size: 12px;
//                 width: 34px;
//                 height: 34px;
//                 cursor: pointer;
//                 transition: opacity 300ms ease 0s;

//                 > img {
//                     opacity: 0.4;
//                 }
//             }
//         }
//     }

//     .divider {
//         border-width: 0px 0px 1px;
//         border-top-style: initial;
//         border-right-style: initial;
//         border-left-style: initial;
//         border-top-color: initial;
//         border-right-color: initial;
//         border-left-color: initial;
//         border-image: initial;
//         border-bottom-style: solid;
//         border-bottom-color: rgb(240, 240, 240);
//         margin: 0px 20px;
//     }
// `;

// const Ul = styled.ul`
//     list-style: none;
//     padding: 0px;
//     margin: 14px -5px 0px;
//     overflow: hidden;
// `;

// const Li = styled.li`
//     display: inline-block;
//     vertical-align: top;
//     box-sizing: border-box;
//     width: 33.333333333333336%;
//     padding: 0 5px;
//     margin: 0 0 24px;

//     @media (min-width: 520px) {
//         width: 25%;
//     }

//     @media (min-width: 680px) {
//         width: 20%;
//     }

//     @media (min-width: 840px) {
//         width: 16.6667%;
//     }

//     @media (min-width: 960px) {
//         width: 14.2857%;
//     }

//     @media (min-width: 1100px) {
//         width: 12.5%;
//     }
//     @media (min-width: 1200px) {
//         width: 11.1111%;
//     }

//     .contentPosterBlock {
//         position: relative;
//         width: 100%;
//         height: 0;
//         padding-bottom: 145.37037037037038%;

//         .lazyLoading {
//             position: relative;
//             overflow: hidden;
//             position: absolute;
//             top: 0;
//             left: 0;
//             box-sizing: border-box;
//             width: 100%;
//             height: 100%;
//             border: 1px solid #eae9e8;
//             border-radius: 5px;
//             background: #f8f8f8;
//             -webkit-transition: 300ms;
//             transition: 300ms;

//             .styledImg {
//                 vertical-align: top;
//                 width: 100%;
//                 height: 100%;
//                 opacity: 1;
//                 object-fit: cover;
//                 transition: opacity 420ms ease 0s;
//             }
//         }

//         .badge {
//             display: block;
//             position: relative;
//             float: right;
//             background: url("https://an2-img.amz.wtchn.net/image/v1/updatable_images/2570/original/f72039e19e3d483c3c6d8178c526a1c979537975.png")
//                 center center / 17px no-repeat rgb(255, 255, 255);
//             box-sizing: border-box;
//             width: 24px;
//             height: 24px;
//             padding: 4px 3px 3px 4px;
//             margin: 4px 4px 0px 0px;
//             border: 1px solid rgba(0, 0, 0, 0.07);
//             border-radius: 50%;
//             opacity: 1;
//             transition: opacity 300ms ease 0s;

//             @media (min-width: 719px) {
//                 margin: 6px 6px 0px 0px;
//                 background-size: 20px;
//                 width: 30px;
//                 height: 30px;
//                 padding: 4px;
//             }
//         }
//     }

//     .contentInfo {
//         text-align: left;
//         width: calc(100% - 10px);
//         margin: 5px 10px 0 0;

//         .contentTitle {
//             color: rgb(41, 42, 50);
//             font-size: 16px;
//             font-weight: 500;
//             letter-spacing: -0.3px;
//             line-height: 22px;
//             white-space: nowrap;
//             overflow: hidden;
//             text-overflow: ellipsis;
//         }
//         .contentRating {
//             color: rgb(255, 161, 54);
//             font-size: 13px;
//             font-weight: 400;
//             letter-spacing: -0.2px;
//             line-height: 18px;
//             white-space: nowrap;
//             height: 18px;
//             overflow: hidden;
//             text-overflow: ellipsis;

//             @media (min-width: 719px) {
//                 margin-top: 2px;
//             }
//         }
//     }
// `;

// const Footer = styled.footer`
//   position: fixed;
//   bottom: 0;
//   z-index: 51;
//   background: #fff;
//   box-sizing: border-box;
//   width: 100%;
//   border-top: 1px solid #d2d2d2;

//   @media (min-width: 719px) {
//     display: none;
//   }

//   .footerNav {
//     box-sizing: border-box;
//     height: 56px;
//     padding: 8px 0 4px;

//     .navTabUl {
//       list-style: none;
//       padding: 0;
//       margin: 0;
//       display: -webkit-box;
//       display: -webkit-flex;
//       display: -ms-flexbox;
//       display: flex;
//       height: 100%;
//       overflow: hidden;

//       .navItem {
//         -webkit-flex: 1;
//         -ms-flex: 1;
//         flex: 1;
//         text-align: center;
//         height: 100%;
//       }
//     }
//   }
// `;
