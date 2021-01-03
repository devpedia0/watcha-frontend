import React from "react";
import { useParams } from "react-router-dom";
import { CardListInfinite } from "../../../../components";
import { useSelector } from "react-redux";

const ContentsPoster = () => {
    const pageId = useParams().pageId;
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
