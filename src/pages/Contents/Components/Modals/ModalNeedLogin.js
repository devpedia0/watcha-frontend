import React from "react";
import styled from "styled-components";
import { ModalWrapper } from "../../../../components";
import { Icon, Button } from "../../../../styles";
import { useSelector } from "react-redux";

const categoryObj = {
    needLoginInterest: {
        icon: "bookmarkGray",
        description:
            "내 보관함에 작품을 담으려면 로그인이 필요해요. 회원가입 혹은 로그인해주세요.",
    },
    needLoginScore: {
        icon: "starGray",
        description:
            "평가하시려면 로그인이 필요해요. 회원가입 또는 로그인하고 별점을 기록해보세요.",
    },
};

const ModalNeedLogin = ({ onChangeModal, onCloseModal }) => {
    const modal = useSelector((state) => state.modal);

    return (
        <ModalWrapper width="" onCloseModal={onCloseModal}>
            <Icon type="close" w="24px" h="24px" m="10px 0" />
            <ContentInfo>
                <Icon type={categoryObj[modal].icon} w="88px" h="88px" />
                <p>{categoryObj[modal].description}</p>
            </ContentInfo>
            <Button pink mb="10px" onClick={() => onChangeModal("signup")}>
                회원가입
            </Button>

            <Button
                mb="50px"
                color="rgb(255, 47, 110)"
                onClick={() => onChangeModal("login")}
            >
                로그인
            </Button>
        </ModalWrapper>
    );
};

export default ModalNeedLogin;

const ContentInfo = styled.div`
    font-size: 19px;
    font-weight: 700;
    letter-spacing: -0.7px;
    line-height: 30px;
    white-space: pre-line;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 100px;
`;
