const Home = () => {
    return (
        <div className="flex bg-green-200 h-[100%]">
            <div className="m-[10%]">
               <h1 className="text-8xl m-[2%]">
                 PARCEL
              </h1>
              <h2 className="text-xl m-[2%]">
                We have 100's of cloud kitchens which delivers quality indian food. Tastes Like Home
             </h2> 
              <h2 className="text-xl m-[2%]">
                We are also Bringing up the monthly subscriptions
              </h2>
              {/* <h2 className="text-l">
              It protects you against many chronic noncommunicable diseases,<br/> 
              such as heart disease, diabetes and cancer.<br/>
              Eating a variety of foods and consuming less salt,<br/> 
              sugars and saturated and industrially-produced trans-fats,<br/> 
              are essential for healthy diet.<br/> 
              A healthy diet comprises a combination of different foods.
              </h2> */}
              <div className="flex">
              <button className="bg-black text-white m-[2%] p-[2%] mt-[1%] w-[25%]">Get Started</button>
              <button className="bg-white text-black m-[2%] p-[2%] mt-[1%] w-[25%]">Subscriptions</button>
              </div>
            </div>
            <div className="">
            <img src="https://i.postimg.cc/0yM0ZVJg/23785080-6857793-removebg.png"/>
            </div>
        </div>
    )
    
}
export default Home;