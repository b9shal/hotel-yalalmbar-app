import { item } from "../../interfaces/item";

const Card2: React.FC<item> = ({ name, photo, price }) => {
  
  return(

    <div className="max-w-sm h-80 md:h-96 lg:h-96 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 rounded-lg">
      <img className="w-56 h-56 pt-4 md:w-64 lg:h-64 mx-auto rounded-full" src={photo} alt="" />
      <p className="text-center text-2xl">{name}</p>
      <div className="flex justify-center gap-3 mt-2 ml-4 text-lg">
        <span className=""><span className="bg-orange-400 px-2 text-2xl rounded-full text-white">रु</span> {price}</span>
        <span className="text-md px-1 py-2 bg-orange-300 rounded-lg">Order Now</span>
      </div>
    </div>
  )
}

export default Card2;