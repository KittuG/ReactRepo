import { useState } from "react";
import ItemCard from "./ItemCard";
const ResturantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div>
            <div className="bg-gray-50 shadow-lg w-6/12 mx-auto my-2 p-2 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="text-lg font-bold">{data.title}({data.itemCards.length})</span>
                    <span className="text-2xl">▾</span>
                </div>
                {showItems && <ItemCard items={data.itemCards} />}
            </div>

        </div>
    )
}

export default ResturantCategory;