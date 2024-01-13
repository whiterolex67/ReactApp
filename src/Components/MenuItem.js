import { FoodPics } from "../utils/mockdata";
import {
  Button
} from '@material-tailwind/react'
const MenuItem = (props) => {
    const {MenuData} = props;
    return (
            <div className="m-6 p-5 flex justify-between bg-gray-900 text-white">
                <div>
                <h1 className="text-2xl">{MenuData.name}</h1>
                <h2>{MenuData.description || "-"}</h2>
                <h2>₹{MenuData.defaultPrice/100 || MenuData.price/100}</h2>
                <h2>{MenuData.ratings.aggregatedRating.rating || "-"}⭐</h2>
                <h2>{MenuData.ratings.aggregatedRating.ratingCount || "-"}</h2>
                </div>
                <div>
                    <Button className="p-2 w-32 absolute ml-2 mt-[6.5%] bg-gray-100 text-black">ADD</Button>
                    <img className=" w-36 h-36" src = {FoodPics + MenuData.imageId}/>
                </div>
            </div>
    )
}
export default MenuItem;