import './gift.css'
import giftbox from './giftbox.png';
import {useLocation} from "react-router-dom";
import {useMemo, useState} from "react";

function useQuery() {
    const {search} = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
}
const Gift = () => {
    const query = useQuery();
    const puzzleId = useState(query.get("id"))[0];
    const userId = useState(query.get("userId"))[0];
    const name = useState(query.get("name"))[0];
    const piece = useState(query.get("piece"))[0];
    let url= "exp://10.123.0.213:19000/--/path/into/app"
    if (puzzleId && userId && name && piece) {
        url = url + "?id=" + puzzleId + "&&userId=" + userId + "&&name=" + name + "&&piece=" + piece
    }
    return (
        <div
            className="center"
        >
            <a
                href={url}
            >
                <img
                    className="img"
                    src={giftbox} alt="giftbox"/>
            </a>
        </div>
    )
}
export default Gift
