import { FoodPics } from "../utils/mockdata";
import {
  Button
} from '@material-tailwind/react'
const MenuItem = (props) => {
    const {MenuData} = props;
    return (
            <div className="m-5 p-5 flex justify-between bg-white text-gray-900 border-2 border-black">
                <div>
                <h1 className="text-2xl">{MenuData.name}</h1>
                <h2 className="text-md">{MenuData.description || '-'}</h2>
                <h2 className="text-md">₹{MenuData.defaultPrice/100 || MenuData.price/100}</h2>
                <h2 className="text-md">{MenuData.ratings.aggregatedRating.rating || "-"}⭐</h2>
                <h2 className="text-md">{MenuData.ratings.aggregatedRating.ratingCount || "-"}</h2>
                </div>
                <div>
                    <img className=" w-36 h-32" src = {FoodPics + MenuData.imageId}/>
                    <Button className="p-1 w-32 ml-2.5 bg-gray-900 text-white text-md z-10">ADD</Button>
                </div>
            </div>
    )
}
export default MenuItem;