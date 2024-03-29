import RestaurentCardComponent, {isBestSellerOrNot} from "./KitchenCard.js";
import ShimmerLoading from "./ShimmerLoading"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Button,Input,Breadcrumbs,} from "@material-tailwind/react";
const BodyComponent = () => {
    const [Restaurents,setRestaurents] = useState([]);
    const [SearchText,setSearchText] = useState("");
    const [FilteredRestaurents,setFilteredRestaurents] = useState([]);
    const [MyLocation,setMyLocation] = useState(["12.9783692","77.6408356"]);
    const [LoadChange,setLoadChange] = useState(false);
    const BestSellerCard = isBestSellerOrNot(RestaurentCardComponent);
    useEffect(()=> {
        fetchData().then(()=>{
            setLoadChange(false);
        })
    },[MyLocation]);
    const UserLocationCoords = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(Location=>{
                const {latitude,longitude} = Location.coords;
                setMyLocation([latitude,longitude]);
                setLoadChange(true);
            })
        }
        else {
            console.log("Location settings not available for this device");
        }
    }
    const fetchData = async () => {
        const Data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=" +MyLocation[0] +"&lng="+ MyLocation[1] +"&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await Data.json();
        const updatedJsonData = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurents(updatedJsonData);
        setFilteredRestaurents(updatedJsonData);
        console.log(updatedJsonData);
    }
    if(Restaurents.length == 0){
        return <ShimmerLoading/>
    }
    return (
        <div className="">
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
    </Breadcrumbs>
            <div className = "flex">
            <div className=" w-96 mt-3 ml-4">
                    <Input type ="text" value={SearchText} className="" label="Search" 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        setFilteredRestaurents(Restaurents.filter(
                            (res) => res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
                        ));
                    }}/>
                </div>
                <div className="mt-3 ml-4">
                <Button className="" onClick={() => {
                    setFilteredRestaurents(
                        Restaurents.filter((res) => res.info.avgRating > 4)
                    );
                }}>
                Top Rated Kitchens</Button></div>
                <div className="mt-3 ml-4">
                    <Button loading ={LoadChange} onClick={(e) =>{
                        UserLocationCoords();
                    }} className="">
                        Locate Me 🌎
                    </Button>
                </div>
            </div>
            <div>
                <h1 className = "text-3xl ml-[40%]">{FilteredRestaurents.length} Kitchens Near you</h1>
                <h3 className="text-l ml-[41.5%]">Showing Results in {
                    Restaurents[0].info.areaName
                }</h3>
            </div>
            <div className="flex flex-wrap ml-24">
                {
                    FilteredRestaurents.map(Kitchens=>(
                        <Link className="transform hover:scale-105" to = {"/KitchenMenu/" + Kitchens.info.id} key={Kitchens.info.id}>
                        {Kitchens.info.cuisines.includes("Biryani") ? (<BestSellerCard Data = {Kitchens.info}/>) : (<RestaurentCardComponent Data = {Kitchens.info}/>)}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
export default BodyComponent;