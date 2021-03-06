import React, { useEffect } from "react";
import siteConfig from "../../utils/siteConfig";
import { useDispatch, useSelector } from "react-redux";
import boardActions from "../../redux/actions/boardActions";
import { BoxImg } from "../../styles";

const PageBoard = ({ match }) => {
    const pageId = match.params.pageId;
    const headers = siteConfig[pageId].headers;

    const dispatch = useDispatch();
    const { prevPageId, data } = useSelector((state) => state.board);

    useEffect(() => {
        if (prevPageId === pageId) return;
        dispatch(boardActions.fetch(`/${pageId}?page=1&size=10`));
    }, [dispatch, prevPageId, pageId]);

    const Row = (item) => {
        return (
            <tr>
                <th className="align-middle">1</th>
                <td style={{ width: "70px" }}>
                    <BoxImg width="50px" height="50px" />
                </td>
                <td className="align-middle">Otto</td>
                <td className="align-middle">@mdo</td>
                <td className="align-middle" style={{ width: "120px" }}>
                    <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm mr-2"
                    >
                        수정
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                    >
                        삭제
                    </button>
                </td>
            </tr>
        );
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    {headers.map((item, idx) => (
                        <th key={idx} scope="col">
                            {item.title}
                        </th>
                    ))}
                    <th scope="col" className="col-auto">
                        Ctrl
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, idx) => (
                    <Row key={idx} item={item} />
                ))}
            </tbody>
        </table>
    );
};

export default PageBoard;
