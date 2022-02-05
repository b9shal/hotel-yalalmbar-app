import { ImenuItem } from "../../interfaces/menuItemInterface";
import { menuItems } from '../../data/menuItems';
import Link from "next/link";


const DropDown: React.FC = () => {

  return(
    <ul className='flex flex-col h-full text-center text-lg text-black shadow-md rounded bg-yellow-300 transition-all tracking-wide'>
      {
        menuItems.map((item: ImenuItem) => (
          <li key={item.id} className="m-3 hover:bg-white-200 rounded-full cursor-pointer transition ease-in-out delay-75 hover:-translate-z-4 hover:-translate-y-1 hover:scale-110 duration-75"><Link href={item.link}>{item.itemName}</Link></li>
        ))
      }
    </ul>
  );
};

export default DropDown;