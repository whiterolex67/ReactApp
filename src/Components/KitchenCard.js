import { FoodPics } from "../utils/mockdata";
const RestaurentCardComponent = (props) => {
    const {Data} = props;
    const Delivery = Data.sla.deliveryTime <= 15 ? "Super Fast Delivery - " + Data.sla.deliveryTime+
                     " Minutes⚡" : Data.sla.deliveryTime + " Minutes🏍️"
    return (
        <div className ="w-[300px] h-[510px] m-4 p-4 border-2 
        transform transition duration-100 hover:scale-110">
            <img className="rounded-xl w-[300px] h-[200px]" src= {FoodPics + Data.cloudinaryImageId} alt = "resto-logo"/>
            <h3 className="p-2 text-2xl">{Data.name}</h3>
            <h4 className="p-2">{Data.cuisines.slice(0,4).join(', ')}</h4>
            <h4 className="p-2">{Data.avgRatingString} ⭐</h4>
            <h4 className="p-2">{Delivery}</h4>
        </div>
    )
}
export default RestaurentCardComponent; 