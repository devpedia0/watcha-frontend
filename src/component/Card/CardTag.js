import React from "react";

const CardTag = ({ item, selected, onClick, onClickDelete }) => {
    return (
        <>
            {onClickDelete ? (
                <span
                    onClick={() => onClickDelete(item)}
                    className="tag badge badge-pill badge-info"
                >
                    {item.description}{" "}
                    <i className="far fa-times-circle ml-2"></i>
                </span>
            ) : (
                <span
                    onClick={() => onClick(item)}
                    className={`tag badge badge-pill badge-${
                        selected ? "success" : "info"
                    }`}
                >
                    {item.description}{" "}
                    {selected && <i className="far fa-check-circle ml-2"></i>}
                </span>
            )}
        </>
    );
};

export default React.memo(CardTag);
