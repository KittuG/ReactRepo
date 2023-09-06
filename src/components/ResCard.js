import { CDN_URL } from "../utils/constants";
const ResCard = (props) => {
    const { resData } = props;
    const { name, avgRating, cuisines, costForTwo, deliveryTime, cloudinaryImageId } = resData.info
    return (
        <div className="res-card">
            <img alt="res-logo" src={CDN_URL + cloudinaryImageId} className="res-logo"></img>
            <h3>{name}</h3>
            <h5>{avgRating} stars</h5>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}

export default ResCard;