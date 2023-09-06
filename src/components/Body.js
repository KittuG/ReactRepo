
import ResCard from "./ResCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [resListHook, setResListHook] = useState(resObj);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => { const filterData = resListHook.filter((data) => data.info.avgRating > 4.5); console.log(resListHook); setResListHook(filterData) }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {resListHook.map(data => <ResCard key={data.info.id} resData={data} />)}

            </div>
        </div>
    )
}

export default Body;