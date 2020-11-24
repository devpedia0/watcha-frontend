import React from "react";

const RadioYN = ({ title, name, value, onChange }) => {
    return (
        <div className="form-group">
            <label>{title}</label>
            <br />
            {[
                { key: "true", title: "Y" },
                { key: "false", title: "N" },
            ].map((option) => (
                <div key={option.key} className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name={name}
                        value={option.key}
                        checked={option.key === value}
                        onChange={onChange}
                        id={`${name + option.key}`}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={`${name + option.key}`}
                    >
                        {option.title}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default React.memo(RadioYN);
