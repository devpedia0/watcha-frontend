import React from "react";
import { useSelector } from "react-redux";
import { CardListSlick, Card } from "../../../../components";
import history from "../../../../history";
import { Divider } from "../../../../styles";

const ContentsInfo = () => {
    const {
        data: { participants },
    } = useSelector((state) => state.content);

    return (
        <>
            <CardListSlick title="출연/제작" horizon>
                {participants.map((item, idx) => (
                    <Card
                        key={idx}
                        item={item}
                        width="49%"
                        radius="20%"
                        onClick={() => {
                            history.push(`/people/${item.id}`);
                        }}
                    />
                ))}
            </CardListSlick>
            <Divider />
        </>
    );
};

export default ContentsInfo;
