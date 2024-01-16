import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/mockdata";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import { Breadcrumbs, } from "@material-tailwind/react";
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
    }
    const {name,areaName,avgRatingString,costForTwoMessage,totalRatingsString} = RestaurentBasicDetails;
    const cuisines = RestaurentBasicDetails.cuisines;
    return (
        <div className="mt-[0%] bg-white">
    <Breadcrumbs className="m-5">
        <Link to = "/" className="opacity-60">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
        </Link>
        <Link to = '/ourKitchens' className="opacity-60">
            <span>Our Kitchens</span>
        </Link>
        <Link to = '' className="opacity-60">
            <span>{name}</span>
        </Link>
    </Breadcrumbs>
           <div className="">
           <h1 className="text-6xl text-center text-black">{name}</h1>
                <h3 className="mt-[1%] ml-[43%] mr-[43%] text-center bg-gray-900 rounded-lg text-white">{cuisines && cuisines.join(', ')}</h3>
           </div>
           <div className="flex justify-between ml-[25%] mr-[25%] mt-[1%]">
             <h3 className=" bg-gray-900 text-white p-[1%] rounded-lg">{areaName}</h3>
             <h3 className="bg-gray-900 text-white p-[1%] rounded-lg">{costForTwoMessage}</h3>
             <h3 className="bg-gray-900 text-white p-[1%] rounded-lg">{avgRatingString} ⭐</h3>
             <h3 className="bg-gray-900 text-white p-[1%] rounded-lg">{totalRatingsString}</h3>
            </div>
            <div className="mt-[1%] flex">
                <input className="w-[70%] p-[1%] ml-[25%] mr-[25%] outline-none border-2 text-black" value = {SearchText} onChange={(e)=>{
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