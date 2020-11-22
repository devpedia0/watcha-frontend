import React from "react";
import CardList from "../../component/CardList/CardList";

const FormMovie = ({ inputs, onChange }) => {
    return (
        <CardList title="추가 정보">
            <div className="row">
                <div className="form-group col">
                    <label>원제목</label>
                    <input
                        className="form-control"
                        name="originTitle"
                        value={inputs.originTitle || ""}
                        onChange={onChange}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col">
                    <label>국가코드</label>
                    <input
                        className="form-control"
                        name="countryCode"
                        value={inputs.countryCode || ""}
                        onChange={onChange}
                    />
                </div>

                <div className="form-group col">
                    <label>상영시간(분)</label>
                    <input
                        className="form-control"
                        name="runningTimeInMinutes"
                        value={inputs.runningTimeInMinutes || ""}
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label>예매율</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            name="bookRate"
                            value={inputs.bookRate || ""}
                            onChange={onChange}
                        />

                        <div className="input-group-append">
                            <span className="input-group-text">%</span>
                        </div>
                    </div>
                </div>

                <div className="form-group col">
                    <label>누적관객</label>
                    <input
                        className="form-control"
                        name="totalAudience"
                        value={inputs.totalAudience || ""}
                        onChange={onChange}
                    />
                </div>
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

export default React.memo(FormMovie);
