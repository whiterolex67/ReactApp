import { useState,useEffect } from "react";
const useOnlineStatus = () => {
    const [onlineStatus,setonlineStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener('offline',()=>{
            setonlineStatus(false);
        })
        window.addEventListener('online',()=>{
            setonlineStatus(false);
        })
    },[])
    return onlineStatus;
}
export default useOnlineStatus;