import React from "react";
import { useSelector } from "react-redux";
import { CardListSlick, Card } from "../../../../components";
import history from "../../../../history";
import { Divider } from "../../../../styles";

const ContentsPeople = () => {
    const {
        data: { participants },
    } = useSelector((state) => state.content);

    if (participants.length === 0) return null;

    return (
        <>
            <CardListSlick title="출연/제작" horizon>
                {participants.map((item, idx) => (
                    <Card
                        key={idx}
                        width="49%"
                        radius="20%"
                        imageUrl={item.profileImagePath}
                        title={item.name}
                        subTitle={
                            item.role +
                            (item.characterName
                                ? " | " + item.characterName
                                : "")
                        }
                        onClick={() => {
                            history.push(`/detail/people/${item.id}`);
                        }}
                    />
                ))}
            </CardListSlick>
            <Divider />
        </>
    );
};

export default ContentsPeople;
