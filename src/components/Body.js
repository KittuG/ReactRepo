
import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [resListHook, setResListHook] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [filterResturant, setFilterResturant] = useState([]);
    const onlineStatus = useOnlineStatus();
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setResListHook(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    if (!onlineStatus) return <h1>Oops!! Your internet connection is down.🎃</h1>
    // console.log(resListHook.length)
    return (
        resListHook.length === 0 ? <Shimmer /> :
            <div className="body">
                <div className="filter">
                    <div>
                        <input type="text" value={filterText} onChange={(e) => { setFilterText(e.target.value) }}></input>
                        <button onClick={() => {
                            const filteredData = resListHook.filter((res) => res.info.name.toLowerCase().includes(filterText.toLowerCase()))
                            setFilterResturant(filteredData);
                        }}>Filter</button>
                    </div>

                    <button className="filter-btn" onClick={() => { const filterData = resListHook.filter((data) => data.info.avgRating > 4.5); console.log(resListHook); setFilterResturant(filterData) }}>Top Rated Restaurant</button>
                </div>
                <div className="res-container">
                    {filterResturant.map(data => <Link to={"/resturants/" + data.info.id} key={data.info.id}><ResCard resData={data} /></Link>)}

                </div>
            </div>
    )
}

export default Body;