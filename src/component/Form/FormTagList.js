import React, { useCallback } from "react";
import CardTag from "../Card/CardTag";

import CardList from "../CardList/CardList";
import ModalTag from "../Modal/ModalTag";

const FormTagList = ({ tags, setTags, error }) => {
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
        <CardList title="태그추가">
            <ModalTag tags={tags} onClickSave={handleClickSave} />
            {tags.map((item, idx) => (
                <CardTag
                    key={idx}
                    item={item}
                    onClickDelete={handleClickDelete}
                />
            ))}
        </CardList>
    );
};

export default React.memo(FormTagList);
