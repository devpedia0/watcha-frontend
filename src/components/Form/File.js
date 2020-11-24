import React, { useRef } from "react";
import BoxImg from "../Box/BoxImg";

const File = ({ name, value, onChange }) => {
    const imgRef = useRef();
    const handleClickImage = () => imgRef.current.click();

    // const imageUrl = inputs.profileImagePath
    //     ? inputs.profileImagePath
    //     : inputs.file
    //     ? URL.createObjectURL(inputs.file)
    //     : "";

    const imageUrl = value ? URL.createObjectURL(value) : "";

    return (
        <>
            <BoxImg src={imageUrl} onClick={handleClickImage} />
            <div className="form-group">
                <div className="custom-file" style={{ display: "none" }}>
                    <input
                        name={name}
                        type="file"
                        className="custom-file-input"
                        ref={imgRef}
                        onChange={onChange}
                        hidden
                    />
                </div>
            </div>
        </>
    );
};

export default React.memo(File);
