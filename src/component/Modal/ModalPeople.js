import React, { useState } from "react";
import Modal from "./Modal";
import useOpen from "../../Hooks/useOpen";
import useInputs from "../../Hooks/useInputs";

const initialValue = {
    name: "",
    profile_image_id: "",
    description: "",
};

const ModalPeople = () => {
    const { inputs, handleChangeInputs } = useInputs(initialValue);
    const [isOpen, onClickOpen, onClickClose] = useOpen();
    const handleClickSave = () => {};

    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                onClick={onClickOpen}
            >
                추가하기
            </button>
            <Modal
                title="관계자 추가"
                isOpen={isOpen}
                onClick={handleClickSave}
                onClickClose={onClickClose}
            >
                <form>
                    <div className="form-group">
                        <label>이름</label>
                        <input
                            className="form-control"
                            name="name"
                            value={inputs.name}
                            onChange={handleChangeInputs}
                        />
                    </div>
                    <div className="form-group">
                        <label>프로필사진</label>
                        <div className="custom-file">
                            <input
                                name="profile_image_id"
                                type="file"
                                className="custom-file-input"
                                id="customFile"
                            />
                            <label
                                className="custom-file-label"
                                htmlFor="customFile"
                                data-browse="few"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>설명</label>
                        <textarea
                            className="form-control"
                            name="description"
                            value={inputs.description}
                            onChange={handleChangeInputs}
                            rows="3"
                        />
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default ModalPeople;
