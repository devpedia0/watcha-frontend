import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
registerLocale("ko", ko);

const YearPicker = ({ title, name, value, onChange }) => {
    console.log("Select");
    return (
        <div className="form-group">
            <label>{title}</label>
            <DatePicker
                locale="ko"
                selected={value}
                onChange={(date) => {
                    return onChange({
                        target: {
                            name,
                            value: date,
                        },
                    });
                }}
                showYearPicker
                dateFormat="yyyy"
                className="custom-select"
            />
        </div>
    );
};

export default React.memo(YearPicker);
