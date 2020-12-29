import React, { useState, useEffect } from "react";
import styled from "styled-components";
import history from "../../history";
import api from "../../services/api";
import ContentsHeader from "./ContentsHeader/ContentsHeader";
import ContentSectionLeft from "./ContentsSection/ContentSectionLeft";
import ContentsSectionRight from "./ContentsSection/ContentsSectionRight";
import ContentSectionCollection from "./ContentsSection/ContentSectionCollection";

import { CardListInfinite } from "../../components";
import { Loader } from "../../styles";
//import { ContentsHeader222, ContentsInfo } from "./Components";

const Contents = () => {
    const pathname = history.location.pathname;
    const pageId = pathname.split("/")[2];
    // const [modal, setModal] = useState("");
    const [state, setState] = useState({
        isFetching: true,
        data: {},
    });

    useEffect(() => {
        api.get(`/contents/${pageId}`)
            .then((res) => {
                setState({
                    data: res.data,
                    isFetching: false,
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }, [pageId]);

    // const handleModalOpen = (type) => setModal(type);
    // const handleModalClose = () => setModal(false);
    // const handleChangeStars = async (newScore) => {
    //     if (!state.data.context) {
    //         return setModal("needLogin");
    //     }

    //     try {
    //         if (newScore === state.data.context.interestState) {
    //             await api.delete(`/contents/${pageId}/scores`);
    //             setState((state) => ({
    //                 ...state,
    //                 context: {
    //                     ...state.context,
    //                     score: 0,
    //                 },
    //             }));
    //         } else {
    //             api.post(`/contents/${pageId}/scores`, { score: newScore });
    //             setState((state) => ({
    //                 ...state,
    //                 context: {
    //                     ...state.context,
    //                     score: newScore,
    //                 },
    //             }));
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    if (state.isFetching) return <Loader height="800px" />;
    console.log(state.data);
    return (
        <Wrapper>
            {/* <div className="content-header">
                <ContentsHeader222 data={state.data} />
                <ContentsInfo data={state.data} onOpenModal={handleModalOpen} />
            </div> */}
            <ContentsHeader data={state.data} pageId={pageId} />
            <Content>
                <ContentSectionLeft data={state.data} pageId={pageId} />
                <ContentsSectionRight data={state.data} />

                <div className="bottom">
                    <ContentSectionCollection data={state.data} />
                    <CardListInfinite
                        posters={state.data.similar}
                        fetchUrl={`/contents/${pageId}/similar`}
                    />
                </div>
            </Content>
        </Wrapper>
    );
};

export default Contents;

const Wrapper = styled.div`
    background: #f8f8f8;

    .content-header {
        background: #fff;
        @media only screen and (min-width: 719px) {
            border-bottom: 1px solid #e3e3e3;
        }
    }
`;

const Content = styled.div`
    overflow: hidden;
    margin: 0px auto;

    @media only screen and (min-width: 719px) {
        padding: 28px 0 48px;
        max-width: 640px;
    }

    @media only screen and (min-width: 1023px) {
        max-width: 976px;
    }

    .bottom {
        background: #fff;
        border-color: #e3e3e3 !important;
        overflow: hidden;
        background: rgb(255, 255, 255);
        overflow: hidden;
        border-color: rgb(227, 227, 227) !important;
        padding: 0 20px;

        @media only screen and (min-width: 718px) {
            float: left;
            width: 100%;
        }

        @media only screen and (min-width: 1023px) {
            float: left;
            width: 640px;
            border-right: 1px solid;
            border-left: 1px solid;
            border-bottom: 1px solid;
            border-bottom-right-radius: 6px;
            border-bottom-left-radius: 6px;
        }
    }
`;
