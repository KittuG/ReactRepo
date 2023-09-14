import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const ResturantMenu = () => {
    const [restMenuList, setRestMenuList] = useState(null);
    const { resId } = useParams()
    useEffect(() => {
        fetchData();

    }, []);
    const fetchData = async () => {
        const restMenu = await fetch(MENU_URL + resId);
        const data = await restMenu.json();
        console.log(data)

        setRestMenuList(data.data);

    }
    if (restMenuList === null) {
        return <Shimmer></Shimmer>
    }
    console.log(restMenuList)
    const { name, cuisines, costForTwoMessage } = restMenuList?.cards[0]?.card?.card?.info;
    const { itemCards } = restMenuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;
    console.log(itemCards)
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((data) => {
                    return <li key={data.card.info.id}>{data.card.info.name} -{" Rs."} {data.card.info.price / 100 || data.card.info.defaultPrice / 100
                    } </li>
                })}
            </ul>
        </div>
    )
}

export default ResturantMenu;