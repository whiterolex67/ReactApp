import { FoodPics } from "../utils/mockdata";
import { useState } from "react";
import {
  Button
} from '@material-tailwind/react'
const MenuItem = (props) => {
    const {MenuData} = props;
    const [Clicks,setClicks] = useState(1);
    const [CartState,setCartState] = useState("ADD");
    return (
            <div className="m-6 p-5 flex justify-between bg-gray-900 text-white">
                <div>
                <h1 className="text-2xl">{MenuData.name}</h1>
                <h2>{"Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!"}</h2>
                <h2>₹{MenuData.defaultPrice/100 || MenuData.price/100}</h2>
                <h2>{MenuData.ratings.aggregatedRating.rating || "-"}⭐</h2>
                <h2>{MenuData.ratings.aggregatedRating.ratingCount || "-"}</h2>
                </div>
                <div>
                <span onClick = {
                        () => {
                            setClicks(Clicks <= 0 ? "ADD" : Clicks-1)
                            setCartState(Clicks)
                            console.log("Minus")
                        }
                    }className="mr-[25%] text-3xl" id="Minus">-</span>
                    <Button className="p-2 w-32 absolute ml-2 mt-[6.5%] bg-gray-100 text-black border-2 border-gray-500 text-xl" onClick={
                        () => {
                            const m = document.getElementById("Minus")
                            m.style.display = "flex"
                            const p = document.getElementById("Plus")
                            p.style.display = "flex"
                            setClicks(Clicks+1)
                            setCartState(Clicks)
                            console.log("Button")
                        }
                    }>{CartState}</Button>
                    <span onClick = {
                        () => {
                            if(CartState == "ADD") {
                                setClicks(1)
                                setCartState(Clicks)
                                console.log("In IF block")
                            }
                            setClicks(Clicks+1)
                            setCartState(Clicks)
                            console.log("Plus")
                        }
                    }className="mr-[25%] text-3xl" id="Plus">+</span>
                    <img className=" w-36 h-36" src = {FoodPics + MenuData.imageId}/>
                </div>
            </div>
    )
}
export default MenuItem;