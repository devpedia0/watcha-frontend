import React from "react";
import styled from "styled-components";
import { BoxImg } from "../../../../components";
import { Button } from "../../../../styles";
const ContentsWrite = ({ onChangeModal }) => {
    return (
        <>
            <SectionComment>
                <h3>이 작품에 대한 KyungYoonHa 님의 평가를 글로 남겨보세요.</h3>
                <Button
                    basic
                    w="254px"
                    h="40px"
                    onClick={() => onChangeModal("comment")}
                >
                    코멘트 남기기
                </Button>
            </SectionComment>
            <SectionComment>
                <BoxImg
                    width="56px"
                    height="56px"
                    radius="50%"
                    src="https://d3sz5r0rl9fxuc.cloudfront.net/assets/default/user/photo_file_name_small-bc8b334acec6a4e386249dedf9e763b5e6aff523fa85cc29211f22e6bed540df.jpg"
                />
                <div>fwefewfwefwefwe</div>
                <div></div>
            </SectionComment>
        </>
    );
};

export default ContentsWrite;

const SectionComment = styled.div`
    margin-bottom: 12px;
    padding: 12px 20px;
    background: #fff;
    display: flex;

    h3 {
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.5px;
        line-height: 20px;
        color: rgb(74, 74, 74);
        margin-right: 20px;
    }

    @media only screen and (min-width: 719px) {
        border: 1px solid #e3e3e3;
        border-radius: 6px;
    }
`;
