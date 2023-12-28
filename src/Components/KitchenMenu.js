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
        console.log(MenuJson);
    }
    const {name,areaName,avgRatingString,costForTwoMessage,totalRatingsString} = RestaurentBasicDetails;
    const cuisines = RestaurentBasicDetails.cuisines;
    return (
        <div>
           <div className="RestaurentNameInMenu">
           <h1>{name}</h1>
           <h3>{cuisines && cuisines.join(', ')}</h3>
           </div>
           <div className="RestaurentAttributes">
             <h3>{areaName}</h3>
             <h3>{costForTwoMessage}</h3>
             <h3>{avgRatingString} ⭐</h3>
             <h3>{totalRatingsString}</h3>
            </div>
            <div className="MenuSearch">
                <input value = {SearchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                    setFilterMenuDetails(RestaurentMenuDetails.filter((Menu) =>
                        Menu.card.info.name.toLowerCase().includes(e.target.value.toLowerCase()) 
                    ))
                }} type = "text" placeholder = "Search For Food Items                                                                                                                                                                                                                                                                 🔎"/>
            </div>
            <div className="Menu">
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