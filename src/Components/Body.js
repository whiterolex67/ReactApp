import RestaurentCardComponent from "./KitchenCard";
import ShimmerLoading from "./ShimmerLoading"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const BodyComponent = () => {
    const [Restaurents,setRestaurents] = useState([]);
    const [SearchText,setSearchText] = useState("");
    const [FilteredRestaurents,setFilteredRestaurents] = useState([]);
    const [MyLocation,setMyLocation] = useState(["12.9783692","77.6408356"]);
    useEffect(()=> {
        fetchData();
    },[MyLocation]);
    const UserLocationCoords = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(Location=>{
                const {latitude,longitude} = Location.coords;
                // console.log(Location);
                setMyLocation([latitude,longitude]);
            })
        }
        else {
            console.log("Location settings not available for this device");
        }
    }
    const fetchData = async () => {
        const Data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=" +MyLocation[0] +"&lng="+ MyLocation[1] +"&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await Data.json();
        const updatedJsonData = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(jsonData);
        setRestaurents(updatedJsonData);
        setFilteredRestaurents(updatedJsonData);
    }
    if(Restaurents.length == 0){
        return ShimmerLoading();
    }
    return (
        <div className="BodyComponent">
            <div className = "flex">
            <div className="Search">
                    <input type ="text" value={SearchText} className="m-5 font-bold py-2 px-4 rounded-l bg-light_white outline-none" placeholder="Search                           🔎" 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        setFilteredRestaurents(Restaurents.filter(
                            (res) => res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
                        ));
                    }}/>
                </div>
                <div>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l m-5" onClick={() => {
                    setFilteredRestaurents(
                        Restaurents.filter((res) => res.info.avgRating > 4)
                    );
                }}>
                Top Rated Kitchens</button></div>
                <div>
                    <button onClick={(e) =>{
                        UserLocationCoords();
                    }} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l m-5">
                        Locate Me 🌎
                    </button>
                </div>
            </div>
            <div>
                <h1 className = "text-3xl ml-[750px]">{FilteredRestaurents.length} Kitchens Near you</h1>
                <h3 className="text-l ml-[780px]">Showing Results in {FilteredRestaurents[0].info.areaName}</h3>
            </div>
            <div className="flex flex-wrap m-20">
                {
                    FilteredRestaurents.map(Kitchens=>(
                        <Link to = {"/KitchenMenu/" + Kitchens.info.id} key={Kitchens.info.id}><RestaurentCardComponent Data = {Kitchens.info}/></Link>
                    ))
                }
            </div>
        </div>
    )
}
export default BodyComponent;