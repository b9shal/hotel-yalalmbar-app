import { itemArr } from "../../data/item"
import { Card } from "../components"



const Item = () => {
  return(
    <div className="pt-20 px-40">
      {
        itemArr.map((val) => {
          return(
            <div key={val.name} className="flex flex-col md:flex-row lg:flex-row gap-8 md:gap-16 lg:gap-16 w-3/4 md:w-full lg:w-full md:py-8 md:h-3/4 lg:py-8 lg:h-3/4">
              <div className="lg:hidden md:hidden">
                {/* <Card itemName={val.name} photo={val.photo} price={0} tags={[]}/> */}
              </div>

              <div className="flex flex-col p-4 gap-1 md:p-16 md:gap-4 lg:p-16 lg:gap-4 bg-white w-1/2 text-left">
                <div className="flex flex-col gap-2 md:break-words lg:break-words">
                  <div>
                    <p className="text-2xl md:text-5xl lg:text-5xl">{val.name}</p>
                  </div>
                  <div className="text-sm md:text-lg lg:text-lg">{val.description}</div>
                </div>
                <div>
                  <button className="text-xs md:text-xl lg:text-xl text-white px-1 py-2 md:px-2 md:py-3 lg:px-2 lg:py-3 bg-orange-400 rounded-lg animate-bounce hover:animate">Order Now</button>
                </div>
              </div>

              <div className=" w-1/2">
                <img className="py-6 px-4 w-36 h-36 md:w-96 md:h-96 lg:w-96 lg:h-96 rounded-full overflow-hidden" src="https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
              </div>

            </div>
          )
        })
      }
    </div>
  )
}


const getStaticPaths = async () => {

}

export default Item;