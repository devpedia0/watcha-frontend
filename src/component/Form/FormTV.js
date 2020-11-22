import React from "react";
import CardList from "../../component/CardList/CardList";

const FormTV = ({ inputs, onChange }) => {
    return (
        <CardList title="추가 정보">
            <div className="form-group">
                <label>원제목</label>
                <input
                    className="form-control"
                    name="originTitle"
                    value={inputs.originTitle || ""}
                    onChange={onChange}
                />
            </div>

            <div className="form-group">
                <label>국가코드</label>
                <input
                    className="form-control"
                    name="countryCode"
                    value={inputs.countryCode || ""}
                    onChange={onChange}
                />
            </div>

            <div className="form-group">
                <label>왓차여부</label>
                <br />
                {[
                    { key: "true", title: "Y" },
                    { key: "false", title: "N" },
                ].map((option) => (
                    <div
                        key={option.key}
                        className="form-check form-check-inline"
                    >
                        <input
                            className="form-check-input"
                            type="radio"
                            name="isWatchaContent"
                            value={option.key}
                            checked={option.key === inputs.isWatchaContent}
                            onChange={onChange}
                            id={`isWatchaContent${option.key}`}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={`isWatchaContent${option.key}`}
                        >
                            {option.title}
                        </label>
                    </div>
                ))}
            </div>

            <div className="form-group">
                <label>넷플릭스 여부</label>
                <br />
                {[
                    { key: "true", title: "Y" },
                    { key: "false", title: "N" },
                ].map((option) => (
                    <div
                        key={option.key}
                        className="form-check form-check-inline"
                    >
                        <input
                            className="form-check-input"
                            type="radio"
                            name="isNetflixContent"
                            value={option.key}
                            checked={option.key === inputs.isNetflixContent}
                            onChange={onChange}
                            id={`isNetflixContent${option.key}`}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={`isNetflixContent${option.key}`}
                        >
                            {option.title}
                        </label>
                    </div>
                ))}
            </div>
        </CardList>
    );
};

export default React.memo(FormTV);
