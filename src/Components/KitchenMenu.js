import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/mockdata";
import MenuItem from "./MenuItem";
const KitchenMenu = () => {
    const [RestaurentBasicDetails,setRestaurentBasicDetails] = useState([]);
    const [RestaurentMenuDetails,setRestaurentMenuDetails] = useState([]);
    const [FilterMenuDetails,setFilterMenuDetails] = useState([]);
    const [SearchText,setSearchText] = useState("");
    useEffect(()=>{
        fetchRestaurentMenu();
    },[]);
    const {ID} = useParams();
    const fetchRestaurentMenu = async () =>{
        const MenuData = await fetch(MENU_API + ID);
        const MenuJson = await MenuData.json();
        const MenuBasicJsonPath = MenuJson?.data.cards[0]?.card?.card?.info
        setRestaurentBasicDetails(MenuBasicJsonPath);
        const MenuItemsJsonPath = MenuJson?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        setRestaurentMenuDetails(MenuItemsJsonPath);
        setFilterMenuDetails(MenuItemsJsonPath);
        console.log(MenuItemsJsonPath);
    }
    const {name,areaName,avgRatingString,costForTwoMessage,totalRatingsString} = RestaurentBasicDetails;
    const cuisines = RestaurentBasicDetails.cuisines;
    return (
        <div className="mt-[0%] bg-slate-50">
           <div className="">
           <h1 className="text-6xl text-center text-black">{name}</h1>
           <h3 className="mt-[1%] ml-[25%] mr-[25%] text-center bg-yellow-50 text-black">{cuisines && cuisines.join(', ')}</h3>
           </div>
           <div className="flex justify-between ml-[10%] mr-[10%] mt-[1%]">
             <h3 className=" bg-yellow-50 text-black p-[1%]">{areaName}</h3>
             <h3 className="bg-yellow-50 text-black p-[1%]">{costForTwoMessage}</h3>
             <h3 className="bg-yellow-50 text-black p-[1%]">{avgRatingString} ⭐</h3>
             <h3 className="bg-yellow-50 text-black p-[1%]">{totalRatingsString}</h3>
            </div>
            <div className="mt-[1%] flex">
                <input className="w-[70%] p-[1%] ml-[25%] mr-[25%] outline-none bg-slate-800 text-white" value = {SearchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                    setFilterMenuDetails(RestaurentMenuDetails.filter((Menu) =>
                        Menu.card.info.name.toLowerCase().includes(e.target.value.toLowerCase()) 
                    ))
                }} type = "text" placeholder = "Search For Food Items                                                                                                                                                                                                                                                                 🔎"/>
            </div>
            <div className="ml-[20%] mr-[20%] mt-[0%]">
                {
                    FilterMenuDetails.map(MenuItems=>(
                        <MenuItem key = {MenuItems.card.info.id} MenuData = {MenuItems.card.info}/>
                    ))
                }
            </div>
        </div>
    )
}
export default KitchenMenu;