import React from "react";
import CardList from "../../component/CardList/CardList";

const FormMovie = ({ inputs, errors, onChange }) => {
    return (
        <CardList title="추가 정보">
            <div className="row">
                <div className="form-group col">
                    <label>원제목</label>
                    <input
                        name="originTitle"
                        value={inputs.originTitle || ""}
                        onChange={onChange}
                        className={`form-control ${
                            errors.originTitle && "is-invalid"
                        }`}
                    />
                    {errors.originTitle && (
                        <div className="invalid-feedback">
                            {errors.originTitle}
                        </div>
                    )}
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col">
                    <label>국가코드</label>
                    <input
                        name="countryCode"
                        value={inputs.countryCode || ""}
                        onChange={onChange}
                        className={`form-control ${
                            errors.countryCode && "is-invalid"
                        }`}
                    />
                    {errors.countryCode && (
                        <div className="invalid-feedback">
                            {errors.countryCode}
                        </div>
                    )}
                </div>

                <div className="form-group col">
                    <label>상영시간(분)</label>
                    <input
                        name="runningTimeInMinutes"
                        value={inputs.runningTimeInMinutes || ""}
                        onChange={onChange}
                        className={`form-control ${
                            errors.runningTimeInMinutes && "is-invalid"
                        }`}
                    />
                    {errors.runningTimeInMinutes && (
                        <div className="invalid-feedback">
                            {errors.runningTimeInMinutes}
                        </div>
                    )}
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label>예매율</label>
                    <div className="input-group">
                        <input
                            name="bookRate"
                            value={inputs.bookRate || ""}
                            onChange={onChange}
                            className={`form-control ${
                                errors.bookRate && "is-invalid"
                            }`}
                        />

                        <div className="input-group-append">
                            <span className="input-group-text">%</span>
                        </div>
                        {errors.bookRate && (
                            <div className="invalid-feedback">
                                {errors.bookRate}
                            </div>
                        )}
                    </div>
                </div>

                <div className="form-group col">
                    <label>누적관객</label>
                    <input
                        name="totalAudience"
                        value={inputs.totalAudience || ""}
                        onChange={onChange}
                        className={`form-control ${
                            errors.totalAudience && "is-invalid"
                        }`}
                    />
                    {errors.totalAudience && (
                        <div className="invalid-feedback">
                            {errors.totalAudience}
                        </div>
                    )}
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
