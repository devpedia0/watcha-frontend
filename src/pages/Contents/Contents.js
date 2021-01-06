import React, { useEffect } from "react";
import styled from "styled-components";

import {
    ContentsHeader,
    ContentsHeaderInfo,
    ContentsWrite,
    ContentsInfo,
    ModalNeedLogin,
    ModalInterest,
    ModalComment,
    ContentsPeople,
    ContentsGraph,
    ContentsCommentsList,
    ContentCollection,
    ContentsSidebar,
    ContentsPoster,
} from "./Components";
import { ScrollTop } from "../../components";
import { Loader } from "../../styles";

import { useSelector, useDispatch } from "react-redux";
import { contentActions, modalActions } from "../../redux/actions";

const Contents = () => {
    const dispatch = useDispatch();
    const modal = useSelector((state) => state.modal);
    const {
        data,
        userData: { interestState, score, isLogin },
        isFetching,
    } = useSelector((state) => state.content);
    console.log(data);
    useEffect(() => {
        dispatch(contentActions.fetch());
        return () => dispatch(contentActions.initialize());
    }, [dispatch]);

    const handleCloseModal = () => dispatch(modalActions.closeModal());
    const handleChangeModal = (newModal) => {
        dispatch(modalActions.setModal(newModal));
    };

    if (isFetching) return <Loader height="800px" />;

    return (
        <Wrapper>
            <ScrollTop />
            <div className="content-header">
                <ContentsHeader />
                <ContentsHeaderInfo />
            </div>
            <Content>
                <div className="content-left">
                    {isLogin && (!!interestState || !!score) && (
                        <ContentsWrite onChangeModal={handleChangeModal} />
                    )}
                    <div className="content-left-section">
                        <ContentsInfo />
                        <ContentsPeople />
                        <ContentsGraph />
                        <ContentsCommentsList />
                    </div>
                </div>

                <ContentsSidebar />

                <div className="content-bottom">
                    <ContentCollection />
                    <ContentsPoster />
                </div>
            </Content>

            {modal === "interest" && (
                <ModalInterest
                    onCloseModal={handleCloseModal}
                    onChangeModal={handleChangeModal}
                />
            )}
            {(modal === "needLoginScore" || modal === "needLoginInterest") && (
                <ModalNeedLogin
                    onCloseModal={handleCloseModal}
                    onChangeModal={handleChangeModal}
                />
            )}

            {modal === "comment" && (
                <ModalComment
                    title={data.contentInfo.mainTitle}
                    onCloseModal={handleCloseModal}
                />
            )}
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

    .content-left {
        @media only screen and (min-width: 719px) {
            float: left;
            width: 100%;
            margin: 0;
        }

        @media only screen and (min-width: 1023px) {
            float: left;
            width: 640px;
        }
    }

    .content-right {
        padding: 0 20px;
        background: #fff;
        border-color: #e3e3e3 !important;
        overflow: hidden;

        @media only screen and (min-width: 719px) {
            float: left;
            width: 100%;
        }

        @media only screen and (min-width: 1023px) {
            float: right;
            width: 320px;
            border: 1px solid;
            border-radius: 6px;
        }
    }

    .content-left-section {
        padding: 0 20px;
        background: #fff;
        border-color: #e3e3e3 !important;
        overflow: hidden;

        @media only screen and (min-width: 1023px) {
            border-right: 1px solid;
            border-left: 1px solid;
            border-top: 1px solid;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
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

    .content-bottom {
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
