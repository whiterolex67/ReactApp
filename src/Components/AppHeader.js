import { useState } from "react";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
    const [Login,setLogin] = useState("Login🧓🏽");
    return (<div id = "Header">
        <div className="logoAndTitle">
            <img className="logo" src = "https://i.postimg.cc/MZLNQpkB/download-removebg-preview.png"/>
            <h1>PARCEL</h1>
        </div>
        <div className = "Menu-items">
            <ul type = "none">
               <li><Link to = "/">Home</Link></li>
               <li><Link to="/ourKitchens">Our Kitchens</Link></li>
               <li><Link to = "/About">About Us</Link></li>
               <li className="cart">🛒</li>
               <li className="cart" onClick={()=>{
                Login == "Login🧓🏽" ? setLogin("Logout↩️") : setLogin("Login🧓🏽")
               }}>{Login}</li>
            </ul>
        </div>
    </div>)
};
export default HeaderComponent;