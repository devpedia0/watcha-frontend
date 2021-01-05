import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CardListInfinite } from "../../../../components";
import history from "../../../../history";

const ContentsPoster = () => {
    const pageId = useParams().pageId;
    // const pageId = history.location.pathname.split("/")[2];
    const {
        data: { similar },
    } = useSelector((state) => state.content);
    return (
        <CardListInfinite
            posters={similar}
            fetchUrl={`/contents/${pageId}/similar`}
        />
    );
};

export default ContentsPoster;
