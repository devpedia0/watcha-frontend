import React, { useCallback } from "react";
import CardTag from "../../../../components/Card/CardTag";

import FormSection from "../../../../components/Form/FormSection";
import ModalTag from "./ModalTag/ModalTag";

const FormTags = ({ tags, setTags, error }) => {
    const handleClickSave = useCallback(
        (newTags) => {
            setTags((state) => ({
                ...state,
                tags: newTags,
            }));
        },
        [setTags]
    );

    const handleClickDelete = useCallback(
        (newItem) => {
            setTags((state) => ({
                ...state,
                tags: state.tags.filter((item) => item !== newItem),
            }));
        },
        [setTags]
    );

    return (
        <FormSection title="태그추가">
            <ModalTag tags={tags} onClickSave={handleClickSave} />
            {tags.map((item, idx) => (
                <CardTag
                    key={idx}
                    item={item}
                    onClickDelete={handleClickDelete}
                />
            ))}
        </FormSection>
    );
};

export default React.memo(FormTags);
