import React from "react";

const Textarea = ({ title, name, value, onChange, error, rows = "3" }) => {
    return (
        <div className="form-group">
            <label>{title}</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows={rows}
                className={`form-control ${error && "is-invalid"}`}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default React.memo(Textarea);
