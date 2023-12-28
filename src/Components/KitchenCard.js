import { FoodPics } from "../utils/mockdata";
const RestaurentCardComponent = (props) => {
    const {Data} = props;
    const Delivery = Data.sla.deliveryTime <= 15 ? "Super Fast Delivery - " + Data.sla.deliveryTime+
                     " Minutes⚡" : Data.sla.deliveryTime + " Minutes🏍️"
    return (
        <div className = "KitchenCard">
            <img className="KitchenImg" src= {FoodPics + Data.cloudinaryImageId}/>
            <h3>{Data.name}</h3>
            <h4>{Data.cuisines.slice(0,4).join(', ')}</h4>
            <h4>{Data.avgRatingString} ⭐</h4>
            <h4>{Delivery}</h4>
            {/* <button className="OrderButton">Order Now</button> */}
        </div>
    )
}
export default RestaurentCardComponent; 