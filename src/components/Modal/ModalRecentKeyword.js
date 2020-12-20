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
            const recent = JSON.parse(localStorage.getItem("recent"));
            const res = await api.get("/public/contents/trending_words");
            setKeywords({
                recent,
                hot: res.data,
            });
        };

        getApiData();
    }, []);

    return (
        <Wrap ref={searchRef}>
            <div className="keyword-recent">
                <label>최근키워드</label>
                {keywords.recent.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </div>
            <div className="keword-hot">
                <label>최근키워드</label>
                {keywords.hot.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </div>
        </Wrap>
    );
};

export default ModalRecentKeyword;

const Wrap = styled.div`
    position: absolute;
    top: 55px;
    left: 0px;
    width: 100%;
    text-align: left;
    padding: 0 10px;
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
`;
