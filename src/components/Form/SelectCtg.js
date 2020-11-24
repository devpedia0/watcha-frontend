import React from "react";

const SelectCtg = ({ title, name, value, onChange, error }) => {
    const options = [
        { key: "", title: "카테고리 선택" },
        { key: "romance", title: "로맨스" },
        { key: "action", title: "액션" },
        { key: "comedy", title: "코미디" },
        { key: "crime", title: "범죄" },
    ];
    return (
        <div className="form-group">
            <label>{title}</label>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className={`custom-select ${error && "is-invalid"}`}
            >
                {options.map((item) => (
                    <option key={item.key} value={item.key}>
                        {item.title}
                    </option>
                ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default React.memo(SelectCtg);
