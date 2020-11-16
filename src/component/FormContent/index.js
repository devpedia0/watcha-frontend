import React, { useState, useCallback } from "react";

import FormMain from "./FormMain";
import FormMovie from "./FormMovie";
import FormBook from "./FormBook";
import FormTV from "./FormTV";

const initialValue = {
    poster_image_id: "",
    main_title: "",
    category: "",
    production_year: new Date(),
    description: "",
    dtype: "",
    Content: [],
    People: [],
};

const FormContent = () => {
    const [data, setData] = useState(initialValue);

    const renderHelper = (dtype) => {
        switch (dtype) {
            case "movie":
                return <FormMovie data={data.Content} setData={setData} />;
            case "book":
                return <FormBook data={data.Content} setData={setData} />;
            case "tv":
                return <FormTV data={data.Content} setData={setData} />;

            default:
                return null;
        }
    };
    console.log(data);
    return (
        <div>
            <FormMain data={data} setData={setData} />
            {data.dtype && renderHelper(data.dtype)}
            {data.dtype && <div>관계형 테이블</div>}
        </div>
    );
};

export default FormContent;
