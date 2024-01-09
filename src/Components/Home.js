import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./offline";
import { Link } from "react-router-dom";
const Home = () => {
    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false){
        return <Offline/>
    }
    return (
        <div className="flex h-[100%] bg-green-200 mb-[0%]">
            <div className="m-[10%] mb-[0%]">
               <h1 className="text-8xl m-[2%]">
                 PARCEL
              </h1>
              <h2 className="text-xl m-[2%]">
                We have 100's of cloud kitchens which delivers quality indian food. Tastes Like Home
             </h2> 
              <h2 className="text-xl m-[2%]">
                We also have monthly subscription based plans
              </h2>
              <div className="flex">
              <button className="bg-black text-white m-[2%] p-[2%] mt-[1%] w-[20%] rounded-md hover:shadow-2xl">Get Started</button>
              <Link className="bg-white text-l text-black m-[2%] p-[2%] mt-[1%] w-[20%] rounded-md hover:shadow-2xl" to="/Subscriptions">Subscriptions<button
              className="text-black"></button></Link>
              </div>
            </div>
            <div className="">
            <img src="https://i.postimg.cc/0yM0ZVJg/23785080-6857793-removebg.png"/>
            </div>
        </div>
    )
    
}
export default Home;
