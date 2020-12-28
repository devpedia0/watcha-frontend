import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import api from "../../services/api";

const ModalRecentKeyword = ({ open, onClickClose }) => {
    const searchRef = useRef();
    const [keywords, setKeywords] = useState({
        recent: [],
        hot: [],
    });

    useEffect(() => {
        const searchElem = searchRef.current;
        const handleClickOutside = ({ target }) => {
            if (open && !searchElem.contains(target)) onClickClose();
        };
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [open, onClickClose]);

    useEffect(() => {
        const getApiData = async () => {
            const recent = JSON.parse(localStorage.getItem("recent")) || [];
            const res = await api.get("/public/contents/trending_words");
            setKeywords({
                recent,
                hot: res.data,
            });
        };

        getApiData();
    }, []);

    const handleDeleteRecentKeyword = () => {
        localStorage.removeItem("recent");
        setKeywords({
            ...keywords,
            recent: [],
        });
    };
    return (
        <Wrapper ref={searchRef}>
            <div className="keyword-recent">
                <div className="keyword-recent-block">
                    <label>최근키워드</label>
                    <span onClick={handleDeleteRecentKeyword}>모두삭제</span>
                </div>
                {keywords.recent.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </div>
            <div className="keword-hot">
                <label>인기검색어</label>
                {keywords.hot.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </div>
        </Wrapper>
    );
};

export default ModalRecentKeyword;

const Wrapper = styled.div`
    position: absolute;
    top: 55px;
    left: 0px;
    width: 100%;
    text-align: left;
    padding: 0 12px;
    background: white;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 23px;
    border-radius: 2%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    label {
        margin-top: 10px;
        font-weight: 500;
        color: #ff2f6e;
        height: 30px;
    }

    li {
        height: 30px;

        &:hover {
            background: #f7f7f7;
        }
    }

    .keyword-recent {
        border-bottom: 1px solid #ebebeb;
        margin-bottom: 10px;
    }

    .keyword-recent-block {
        display: flex;
        justify-content: space-between;

        span {
            margin-top: 10px;
            font-weight: 300;
            font-size: 13px;
            height: 30px;
            cursor: pointer;
        }
    }
`;
