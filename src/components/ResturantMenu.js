import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = () => {

    const { resId } = useParams()
    const restMenuList = useResturantMenu(resId);

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