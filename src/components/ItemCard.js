import { CDN_URL } from "../utils/constants";

const ItemCard = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="text-left border-gray-300 border-b-[1px] p-2 m-2 flex justify-between" >
                    <div className="w-9/12">
                        <span className="text-lg font-bold text-gray-700">{item.card.info.name}</span>
                        <span className="text-md mx-2"> ₹-{item.card.info.price / 100 ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        <p className="text-gray-400 py-2">
                            {item.card.info.description ? item.card.info.description : ''}
                        </p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="bg-black text-white p-2 border-2 rounded-lg border-gray-100 mx-8 my-16 ">+ADD</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className="w-full"></img>

                    </div>
                </div>
            ))}
        </div>
    )
}
export default ItemCard;