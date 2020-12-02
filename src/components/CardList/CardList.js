import React, { useState, useEffect } from "react";
import styled from "styled-components";
import dummy from "../../utils/dummy";
// import api from "../../services/api";

const Wrapper = styled.div`
    padding-top: 0px;
    padding-bottom: 30px;
    border-bottom: 1px solid #f0f0f0;
    height: auto;
    flex-wrap: wrap;
    .header {
        margin: 20px 0;
        font-size: 1.5rem;
        font-weight: bold;
        // border-bottom: 1px solid #ced4da;
    }

    .tag {
        margin-top: 10px;
        margin-right: 10px;
        font-size: 1.1rem;
    }
`;

const initialState = {
    title: "",
    items: [],
};

const CardList = ({ fetchURL, size, card: Card }) => {
    const [data, setData] = useState(initialState);

    useEffect(() => {
        const fetchData = async () => {
            // const res = await api.get(fetchURL);
            const res = dummy;
            setData(res.data);
        };
        fetchData();
    }, [fetchURL]);

    return (
        <Wrapper>
            <div className="header">{data.title}</div>
            {data.items.map((item, idx) => (
                <Card key={idx} item={item} size={size} />
            ))}
        </Wrapper>
    );
};

export default React.memo(CardList);
