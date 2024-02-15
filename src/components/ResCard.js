import { CDN_URL } from "../utils/constants";
const ResCard = (props) => {
    const { resData } = props;
    const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } = resData.info
    return (
        <div className="m-4 p-4 w-[235px] bg-gray-100 rounded-lg hover:bg-gray-300">
            <img className="rounded-lg h-28 w-56" alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-xl">{name}</h3>
            <h5>{avgRating} stars</h5>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}

export const withPromotedLabel = ((ResCard) => {
    return ((props) => {
        console.log(props)
        return (
            <div>
                <label className="absolute bg-black text-white p-2 m-2 rounded-lg">{props.resData.info.aggregatedDiscountInfoV3.header}
                </label>
                <ResCard {...props} />
            </div>
        )
    })
})

export default ResCard;