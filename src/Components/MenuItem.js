import { FoodPics } from "../utils/mockdata";
const MenuItem = (props) => {
    const {MenuData} = props;
    return (
        <div className="MenuItem">
            <img className="MenuImg" src = {FoodPics + MenuData.imageId} alt="No Image"/>
            <h3>{MenuData.name}</h3>
            <h4>₹{MenuData.defaultPrice/100 || MenuData.price/100}</h4>
            <h4>{MenuData.ratings.aggregatedRating.rating || "-"}⭐</h4>
            <h4>{MenuData.ratings.aggregatedRating.ratingCount || "0 Ratings"}</h4>
            <button>ADD</button>
        </div>
    )
}
export default MenuItem;