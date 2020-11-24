import React from "react";

const Input = ({
    className,
    title,
    name,
    value,
    onChange,
    error,
    disabled,
    children,
}) => {
    return (
        <div className={`form-group ${className}`}>
            <label>{title}</label>
            <div className="input-group">
                <input
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`form-control ${error && "is-invalid"}`}
                    disabled={disabled}
                />
                {children && (
                    <div className="input-group-append">
                        <span className="input-group-text">{children}</span>
                    </div>
                )}

                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

export default React.memo(Input);
