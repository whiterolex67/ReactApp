import { FoodPics } from "../utils/mockdata";
const RestaurentCardComponent = (props) => {
    const {Data} = props;
    const Delivery = Data.sla.deliveryTime <= 15 ? "Super Fast Delivery - " + Data.sla.deliveryTime+
                     " Minutes⚡" : Data.sla.deliveryTime + " Minutes🏍️"
    return (
        <div className ="w-[300px] h-[400px] m-4 p-[3%] 
        transform transition duration-100 hover:scale-110 bg-gray-300
        text-black hover:bg-gray-200 hover:text-black">
            <img className="rounded-xl w-[300px] h-[180px]" src= {FoodPics + Data.cloudinaryImageId} alt = "resto-logo"/>
            <h3 className="text-2xl m-[1%]">{Data.name}</h3>
            <h4 className="m-[1%]">{Data.cuisines.slice(0,4).join(', ')}</h4>
            <h4 className="m-[1%]">{Data.avgRatingString} ⭐</h4>
            <h4 className="m-[1%]">{Delivery}</h4>
        </div>
    )
}
export default RestaurentCardComponent; 