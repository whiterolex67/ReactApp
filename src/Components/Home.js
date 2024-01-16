import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./offline";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
const Home = () => {
    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false){
        return <Offline/>
    }
    return (
        <div className="flex bg-green-200 mb-[0%]">
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
              <div className="flex flex-auto">
              <button className="bg-black text-white m-[2%] p-[2%] mt-[1%] rounded-md hover:shadow-2xl">Get Started</button>
              <Link className="bg-white text-l text-black m-[2%] p-[2%] mt-[1%] rounded-md hover:shadow-2xl" to="/Subscriptions"><button
              className="text-black p-[2%]">Subscriptions</button></Link>
              </div>
            </div>
            <div className="">
            <img src="https://i.postimg.cc/0yM0ZVJg/23785080-6857793-removebg.png"/>
            {/* <Player src = "https://lottie.host/55cd6638-b99b-42c8-bf65-d4570856d643/oItDTAmbSn.json"  className="player" loop autoplay style = {{
              width : "100%",height : '100%',
            }}/> */}
            </div>
        </div>
    )
    
}
export default Home;
