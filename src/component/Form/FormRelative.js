import React, { useEffect, useState } from "react";
import useInputs from "../../Hooks/useInputs";
import queryString from "query-string";
import history from "../../history";
import img1 from "../../images/ha.jpeg";
import img2 from "../../images/hong.jpeg";
import img3 from "../../images/park.jpeg";
import ModalPeople from "../Modal/ModalPeople";

const initialValue = {
    content_id: "",
    origin_title: "",
    country_code: "KO",
    running_time_minutes: "",
    watcha_yn: "n",
    netflix_yn: "n",
    book_rate: "",
    accumulated_audience: "",
};

const dummy = [
    {
        name: "테스트",
        image_url: img1,
        description: "설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 ",
    },
    {
        name: "테스트22",
        image_url: img2,
        description: "설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 ",
    },
    {
        name: "테스트33",
        image_url: img3,
        description: "설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 ",
    },
];

const FormRelative = () => {
    const content_id = queryString.parse(window.location.search).content_id;
    const { inputs, setInputs, handleChangeInputs } = useInputs(initialValue);
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        if (!content_id) {
            history.goback();
        }

        setInputs((state) => ({
            ...state,
            content_id,
        }));
    }, [content_id, setInputs]);

    const handleClickSubmit = async () => {
        try {
            // TODO: validate
            // const { isValid, errors } = validateAll(inputs);

            // TODO: API
            // await formAPI.submit("/content/relativepeople", inputs)

            history.push("/form/content");
        } catch (e) {
            console.log(e);
        }
    };

    const Card = ({ item }) => {
        return (
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="card">
                    <ul className="list-group list-group-flush">
                        <div className="card-body text-center">
                            <p>
                                <img
                                    className="img-fluid rounded-circle"
                                    style={{ width: "100px", height: "100%" }}
                                    src={item.image_url}
                                    alt=""
                                />
                            </p>
                            <h4 className="card-title">{item.name}</h4>
                            <p className="card-text">역할</p>
                            <p className="card-text">극중이름</p>
                            <p className="card-text">{item.description}</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-danger">
                                삭제
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        );
    };
    return (
        <div>
            <div className="mb-3 d-flex justify-content-between">
                <h2>관계자 등록(3/3)</h2>
                <ModalPeople />
            </div>
            <div className="row">
                {dummy.map((item, idx) => (
                    <Card key={idx} item={item} />
                ))}
            </div>
        </div>
    );
};

export default FormRelative;
