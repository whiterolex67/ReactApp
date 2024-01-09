import { useState } from "react";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
    const [Login,setLogin] = useState("Login🧓🏽");
    return (
    <div className = "flex justify-between text-white p-2 font-extrabold bg-black">
        <div className="p-3">
            <h1 className= "text-5xl tracking-widest"><span>P</span>AЯCEL</h1>
            <h1 className= "text-sm ml-[2%]">Chain of Cloud Kitchens</h1>
        </div>
        <div className="p-[1%]">
            <ul className="flex">
               <li className="p-2 text-xl hover:bg-white hover:text-black hover:rounded-lg"><Link to = "/">Home</Link></li>
               <li className="p-2 text-xl  hover:bg-white hover:text-black hover:rounded-lg"><Link to="/ourKitchens">Our Kitchens</Link></li>
               <li className="p-2 text-xl  hover:bg-white hover:text-black hover:rounded-lg"><Link to = "/About">About Us</Link></li>
               <li className="p-2 text-xl  hover:bg-white hover:text-black hover:rounded-lg">🛒</li>
               <li className="p-2 text-xl  hover:bg-white hover:text-black hover:rounded-lg" onClick={()=>{
                Login == "Login🧓🏽" ? setLogin("Logout↩️") : setLogin("Login🧓🏽")
               }}>{Login}</li>
            </ul>
        </div>
    </div>)
};
export default HeaderComponent;