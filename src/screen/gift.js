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
    const userID = useState(query.get("userID"))[0];
    const puzzleID = useState(query.get("puzzleID"))[0];
    const pieceID = useState(query.get("pieceID"))[0];
    const piece = useState(query.get("piece"))[0];
    const image = useState(query.get("image"))[0];
    let url= "exp://192.168.1.106:19000/--/path/into/app"
    if (userID && puzzleID && pieceID && piece && image) {
        url = url + "?userID=" + userID + "&&puzzleID=" + puzzleID + "&&pieceID=" + pieceID + "&&piece=" + piece
            + "&&image=" + image
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
