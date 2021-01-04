import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../redux/actions";
import { HeaderDetail, CardPoster } from "../../components";
import ModalSelect from "./Components/Modals/ModalSelect";
import RatedByScore from "./Components/RatedByScore/RatedByScore";
import RatedTotal from "./Components/RatedTotal/RatedTotal";

const translateObj = {
    AVG_SCORE: "평점 순",
    TITLE: "가나다 순",
    NEW: "개봉일 순",
};

const UserContentsRated = ({ match }) => {
    const [page, setPage] = useState("TOTAL");
    const [selected, setSelected] = useState("AVG_SCORE");

    const dispatch = useDispatch();
    const modal = useSelector((state) => state.modal);

    return (
        <Wrapper>
            <StyledHeader
                title="평가한 작품들"
                AddComponent={
                    <>
                        <ButtonsWrapper>
                            <li
                                className={page === "TOTAL" ? "on" : ""}
                                onClick={() => setPage("TOTAL")}
                            >
                                전체
                            </li>
                            <li
                                className={page === "RATING" ? "on" : ""}
                                onClick={() => setPage("RATING")}
                            >
                                별점 순
                            </li>
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
            {page === "TOTAL" ? (
                <RatedTotal match={match} selected={selected} />
            ) : (
                <RatedByScore match={match} selected={selected} />
            )}

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

    li {
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
        color: ${(props) => props.theme.gray};

        &.on {
            color: rgb(255, 47, 110);
            border-bottom: 3px solid rgb(255, 47, 110);
        }
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
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNBMEEwQTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjY2MyAxNS44N2wtNS40OTQtNWEuNS41IDAgMCAxIC4zMzctLjg3aDEwLjk4OGEuNS41IDAgMCAxIC4zMzcuODdsLTUuNDk0IDVhLjUuNSAwIDAgMS0uNjc0IDB6Ii8+Cjwvc3ZnPgo=")
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
