
import ResCard, { withPromotedLabel } from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const ResCardWithPromotedLabel = withPromotedLabel(ResCard);
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
                <div className="flex">
                    <div className="m-4 p-4">
                        <input className="border border-solid border-black" type="text" value={filterText} onChange={(e) => { setFilterText(e.target.value) }}></input>
                        <button className="px-4 py-2 bg-green-50 m-4 rounded-lg" onClick={() => {
                            const filteredData = resListHook.filter((res) => res.info.name.toLowerCase().includes(filterText.toLowerCase()))
                            setFilterResturant(filteredData);
                        }}>Filter</button>
                    </div>
                    <div className="m-4 p-4 flex items-center">
                        <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => { const filterData = resListHook.filter((data) => data.info.avgRating > 4.5); console.log(resListHook); setFilterResturant(filterData) }}>Top Rated Restaurant</button>
                    </div>

                </div>
                <div className="flex flex-wrap">
                    {filterResturant.map(data => <Link to={"/resturants/" + data.info.id} key={data.info.id}>{data.info.aggregatedDiscountInfoV3 ? <ResCardWithPromotedLabel resData={data} /> : <ResCard resData={data} />}</Link>)}

                </div>
            </div>
    )
}

export default Body;