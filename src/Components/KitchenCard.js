import { FoodPics } from "../utils/mockdata";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
const RestaurentCardComponent = (props) => {
    const {name,cuisines,avgRatingString,cloudinaryImageId} = props.Data;
    const Delivery = props.Data.sla.deliveryTime <= 15 ? "Super Fast Delivery - " + props.Data.sla.deliveryTime+
                     " Minutes⚡" : props.Data.sla.deliveryTime + " Minutes🏍️"
    return (
        <Card className=" max-w-96 m-5 mt-8 bg-gray-900 text-white">
            <CardHeader floated = {false} className=" h-80 relative">
                <img className="w-96" src={FoodPics + cloudinaryImageId}
                alt = "Image Data Not Available"/>
            </CardHeader>
            <CardBody>
                <Typography variant="h5" className=" text-wrap">
                    {name}
                </Typography>
                <Typography>
                    {cuisines.slice(0,4).join(" ,")}
                </Typography>
                <Typography>
                    {avgRatingString}⭐
                </Typography>
                <Typography>
                    {Delivery}
                </Typography>
            </CardBody>
            <CardFooter>
                <Button fullWidth ={true} className=" bg-white text-black">Order Now</Button>
            </CardFooter>
        </Card>
    )
}
export const isBestSellerOrNot = (RestaurentCardComponent) => {
    return (props) => {
        return (
            <div className="">
            <div className="bg-gray-900"><h2 className=" absolute text-white bg-gray-800 z-10 p-3 ml-5 rounded-md">BestSeller</h2></div>
            <RestaurentCardComponent {...props}/>
            </div>
        )
    }
}
export default RestaurentCardComponent; 