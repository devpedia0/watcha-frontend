import React, { useEffect } from "react";
import FormContainer from "../../styles/FormContainer";

const initialValue = {
    subtitle: "",
    page: "",
    contents: "",
    description2: "",
};

const FormBook = ({ data, setData }) => {
    useEffect(() => {
        setData((state) => ({
            ...state,
            Content: initialValue,
        }));
    }, [setData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((state) => ({
            ...state,
            Content: {
                ...state.Content,
                [name]: value,
            },
        }));
    };
    console.log("Book");

    return (
        <FormContainer>
            <h2 className="mb-3">책</h2>
            <div className="form-group">
                <label>부제목</label>
                <input
                    className="form-control"
                    name="subtitle"
                    value={data.subtitle || ""}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>페이지</label>
                <input
                    className="form-control"
                    name="page"
                    value={data.page || ""}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>목차</label>
                <textarea
                    className="form-control"
                    name="contents"
                    value={data.contents || ""}
                    onChange={handleChange}
                    rows="3"
                />
            </div>
            <div className="form-group">
                <label>출판사 설명</label>
                <textarea
                    className="form-control"
                    name="description2"
                    value={data.description2 || ""}
                    onChange={handleChange}
                    rows="3"
                />
            </div>
        </FormContainer>
    );
};

export default React.memo(FormBook);
