import React, { useCallback } from "react";
import CardTag from "../Card/CardTag";

import CardList from "../CardList/CardList";
import ModalTag from "../Modal/ModalTag";

const FormTagList = ({ tagList, setTagList }) => {
    const handleClickSave = useCallback(
        (newTagList) => {
            setTagList((state) => ({
                ...state,
                tagList: newTagList,
            }));
        },
        [setTagList]
    );

    const handleClickDelete = useCallback(
        (newItem) => {
            setTagList((state) => ({
                ...state,
                tagList: state.tagList.filter((item) => item !== newItem),
            }));
        },
        [setTagList]
    );

    return (
        <CardList title="태그추가">
            <ModalTag tagList={tagList} onClickSave={handleClickSave} />
            {tagList.map((item, idx) => (
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
