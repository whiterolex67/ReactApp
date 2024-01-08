import { useState } from "react";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
    const [Login,setLogin] = useState("Login🧓🏽");
    return (
    <div className = "flex justify-between text-black p-2 font-extrabold bg-blue-100">
        <div className="p-3">
            <h1 className= "text-5xl tracking-widest">ℙAЯCEL</h1>
        </div>
        <div>
            <ul className="flex p-3">
               <li className="p-2 text-xl"><Link to = "/">Home</Link></li>
               <li className="p-2 text-xl"><Link to="/ourKitchens">Our Kitchens</Link></li>
               <li className="p-2 text-xl"><Link to = "/About">About Us</Link></li>
               <li className="p-2 text-xl">🛒</li>
               <li className="p-2 text-xl" onClick={()=>{
                Login == "Login🧓🏽" ? setLogin("Logout↩️") : setLogin("Login🧓🏽")
               }}>{Login}</li>
            </ul>
        </div>
    </div>)
};
export default HeaderComponent;