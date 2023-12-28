import RestaurentCardComponent from "./KitchenCard";
import ShimmerLoading from "./ShimmerLoading"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const BodyComponent = () => {
    const [Restaurents,setRestaurents] = useState([]);
    const [SearchText,setSearchText] = useState("");
    const [FilteredRestaurents,setFilteredRestaurents] = useState([]);
    useEffect(()=> {
        fetchData();
    },[]);
    const fetchData = async () => {
        const Data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4949675&lng=78.41123840000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await Data.json();
        const updatedJsonData = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(jsonData);
        setRestaurents(updatedJsonData);
        setFilteredRestaurents(updatedJsonData);
    }
    if(Restaurents.length == 0){
        return ShimmerLoading();
    }
    return (
        <div className="BodyComponent">
            <div className = "Filter">
            <div className="Search">
                    <input type ="text" value={SearchText} className="SearchBox" placeholder="Search                           🔎" 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        setFilteredRestaurents(Restaurents.filter(
                            (res) => res.info.name.toLowerCase().includes(e.target.value.toLowerCase()) 
                        ));
                    }}/>
                </div>
                <button className="FilterButton" onClick={() => {
                    setFilteredRestaurents(
                        Restaurents.filter((res) => res.info.avgRating > 4)
                    );
                }}>
                Top Rated Kitchens</button>
            </div>
            <div className="TotalRestaurents">
                <h1>{FilteredRestaurents.length} Kitchens Near you</h1>
            </div>
            <div className="RestaurentCard">
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