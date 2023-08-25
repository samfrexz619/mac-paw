
import { cardItems } from "@/lib/utils";
import Card from "./ui/Card";


interface Prop {
  toggleNav: ()=> void;
}


const MobileNavigation = ({toggleNav}: Prop) => {
  return ( 
    <nav onClick={toggleNav} className="fixed inset-y-0 w-full bg-bgg md:hidden flex justify-end">
      <div onClick={e => e.stopPropagation()} className="w-[300px] relative bg-grey_10 h-screen">
        <div className="w-full px-4 flex justify-end py-4">
          <button onClick={toggleNav} className="bg-white h-11 w-11 rounded-xl flex items-center justify-center text-paw_pry">
            <svg width="18" height="18" viewBox="0 0 18 18">
              <use xlinkHref="/sprite.svg#close" />
            </svg>
          </button>
        </div>
        <div className="flex md:gap-x-8 w-full flex-col gap-y-5 md:flex-row mt-20 px-4">
          {
            cardItems.map(card => (
              <Card
                key={card.id}
                variant={card.variant}
                path={card.path}
                imgPath={card.img}
              />
            ))
          }
        </div>
      </div>
    </nav>
   );
}
 
export default MobileNavigation;