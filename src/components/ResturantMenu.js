import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {
  const { resId } = useParams();
  const restMenuList = useResturantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  if (restMenuList === null) {
    return <Shimmer></Shimmer>;
  }

  const { name, cuisines, costForTwoMessage } =
    restMenuList?.cards[0]?.card?.card?.info;
  // const { itemCards } = restMenuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;
  const category =
    restMenuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-2 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {category.map((cat, index) => {
        return (
          <ResturantCategory
            key={cat.card.card.title}
            data={cat.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => {
              setShowIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default ResturantMenu;
