import { FoodPics } from "../utils/mockdata";
const MenuItem = (props) => {
    const {MenuData} = props;
    return (
        <div className="w-[45%] p-[1%] m-[3%] bg-light_white">
            <div className="flex">
            <div className="">
            <h3 className="text-2xl">{MenuData.name}</h3>
            <h4 className="text-sm mt-[5%]">₹{MenuData.defaultPrice/100 || MenuData.price/100}</h4>
            <h4 className="text-sm mt-[5%]">{MenuData.ratings.aggregatedRating.rating || "-"}⭐</h4>
            <h4 className="text-sm mt-[5%]">{MenuData.ratings.aggregatedRating.ratingCount || "0 Ratings"}</h4>
            </div>
            <div className="">
            <img className="w-[70%] h-[50%] ml-[30%] mb-[0%] rounded-lg" src = {FoodPics + MenuData.imageId} alt="No Image"/>
            <button className="w-[40%] ml-[45%] mt-[5%] p-[4%] bg-mighty_blue rounded-lg"><span className=" hidden">+</span>ADD</button>
            </div>
            </div>
        </div>
    )
}
export default MenuItem;