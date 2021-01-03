import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { modalActions } from "../../../../redux/actions";
import { ModalWrapper } from "../../../../components";
import { Icon } from "../../../../styles";

const ModalSelect = ({ title, selected, onCloseModal, onClickRow }) => {
    const dispatch = useDispatch();

    const handleClickRow = async (rowId) => {
        onClickRow(rowId);
        dispatch(modalActions.closeModal());
    };

    return (
        <ModalWrapper width="375px" height="540px" onCloseModal={onCloseModal}>
            <Header>
                <Icon
                    type="close"
                    w="24px"
                    h="24px"
                    margin="auto 0"
                    onClick={onCloseModal}
                />
                <h3>{title}</h3>
            </Header>
            <ContentRow onClick={() => handleClickRow("AVG_SCORE")}>
                평점 순
                {selected === "AVG_SCORE" && (
                    <Icon type="check" w="24px" h="24px" />
                )}
            </ContentRow>
            <ContentRow onClick={() => handleClickRow("TITLE")}>
                가나다 순
                {selected === "TITLE" && (
                    <Icon type="check" w="24px" h="24px" />
                )}
            </ContentRow>
            <ContentRow onClick={() => handleClickRow("NEW")}>
                개봉일 순
                {selected === "NEW" && <Icon type="check" w="24px" h="24px" />}
            </ContentRow>
        </ModalWrapper>
    );
};

export default ModalSelect;

const Header = styled.div`
    background: rgb(255, 255, 255);
    font-size: 17px;

    letter-spacing: -0.5px;
    line-height: 22px;
    width: 100%;
    height: 44px;
    border-bottom: 1px solid rgb(227, 227, 227);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    h3 {
        display: inline-block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-weight: 800;
    }
`;

const ContentRow = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.line};
    cursor: pointer;
`;
