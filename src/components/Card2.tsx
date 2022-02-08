import { item } from "../../interfaces/item";

const Card2: React.FC<item> = ({ name, photo, price }) => {
  
  return(

    <div className="max-w-sm h-80 md:h-96 lg:h-96 bg-blue-300 rounded-lg">
      <div className="">
        <img className="w-64 h-64 mx-auto rounded-full" src={photo} alt="" />      
      </div>
      <p className="text-center text-2xl">{name}</p>
      <div className="flex justify-center gap-3 mt-1 ml-4 text-lg">
        <span className="px-1 py-2">Price: {price}</span>
        <span className="text-md px-1 py-2 bg-orange-400 rounded-lg">Order Now</span>
      </div>
    </div>
  )
}

export default Card2;