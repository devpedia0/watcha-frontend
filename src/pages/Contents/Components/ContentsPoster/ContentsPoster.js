import React from "react";
import { getPageId } from "../../../../utils/helperFunc";
import { CardListInfinite } from "../../../../components";
import { useSelector } from "react-redux";

const ContentsPoster = () => {
    const {
        data: { similar },
    } = useSelector((state) => state.content);
    return (
        <CardListInfinite
            posters={similar}
            fetchUrl={`/contents/${getPageId()}/similar`}
        />
    );
};

export default ContentsPoster;
