import React from "react";
import styled from "styled-components";

import { CardListSlick, CardPoster } from "../../../components";

const ShowMore = ({ href }) => {
    return (
        <Link href={href}>
            모두보기
            <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjE0cHgiIHZpZXdCb3g9IjAgMCA5IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkhvbWUvU2VjdGlvbi9IZWFkZXIvel9JdGVtcy9BcnJvdzwvdGl0bGU+CiAgICA8ZyBpZD0iSG9tZS9TZWN0aW9uL0hlYWRlci96X0l0ZW1zL0Fycm93IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogICAgICAgIDxwb2x5bGluZSBpZD0iUGF0aC1Db3B5LTYiIHN0cm9rZT0iI0E1QTVBQSIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjEgMSA3IDcgMSAxMyI+PC9wb2x5bGluZT4KICAgIDwvZz4KPC9zdmc+"
                alt="arrow"
            ></img>
        </Link>
    );
};

const MainSectionCollection = ({ data }) => {
    if (Object.keys(data).length === 0) {
        return null;
    }

    const { title, subtitle, list, userId, collectionId } = data;
    return (
        <Wrapper>
            <CardListSlick
                title={title}
                description={subtitle}
                posterUrl="https://images.watcha.net/user/48770/small/2a6649c40f8c25614e86f4624c9692594d738d24.jpg"
                userId={userId}
                sizeHeader="lg"
                addComponent={
                    <ShowMore href={`/detail/decks/${collectionId}`} />
                }
            >
                {list.map((item, idx) => (
                    <StyledCard
                        key={idx}
                        item={item}
                        onClick={() =>
                            (window.location = `/contents/${item.id}`)
                        }
                    />
                ))}
            </CardListSlick>
        </Wrapper>
    );
};

export default MainSectionCollection;

const Wrapper = styled.div``;
const StyledCard = styled(CardPoster)`
    width: 33.3333333%;

    @media only screen and (min-width: 600px) {
        width: 25%;
    }
    @media only screen and (min-width: 760px) {
        width: 20%;
        padding: 0 5px;
    }
    @media only screen and (min-width: 1100px) {
        width: 16.6667%;
        padding: 0 8px;
    }
`;

const Link = styled.a`
    display: flex;
    align-items: center;
    color: rgb(116, 116, 123);
    font-size: 15px;
    font-weight: normal;
    letter-spacing: -0.14px;
    text-decoration: none;
    line-height: 15px;
    height: 20px;
    margin: 30px 4px 0px;

    img {
        width: 15px;
        height: 15px;
        line-height: 15px;
        margin: 0 0 0 3px;
    }
`;
