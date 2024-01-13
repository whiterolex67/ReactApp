import SubscriptionCard from "./SubscriptionCard"
import { SubscriptionDetails } from "../utils/mockdata.js"
import { useEffect, useState } from "react"
const SubscriptionPage = () => {
    const [Subscriptions,setSubscriptions] = useState([]);
    useEffect(()=>{
        setSubscriptions(SubscriptionDetails.Subscriptions);
    },[]);
    return (
        <div className=" bg-black">
        <div className="flex bg-zinc-200">
            {
            Subscriptions.map(subscriptions=>(
                <SubscriptionCard key = {subscriptions.id} Data = {subscriptions} />
            ))
            }
        </div>
        </div>
    )
}
export default SubscriptionPage;