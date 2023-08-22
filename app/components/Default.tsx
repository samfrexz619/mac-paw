import { cardItems } from "@/lib/utils";
import Card from "./ui/Card";

const DefaultLayout = () => {
  return ( 
    <div className="w-3/4 mx-auto h-screen">
      <header className="w-full h-24 items-center flex">
        <svg width="107" height="24" viewBox="0 0 107 24">
          <use xlinkHref="/sprite.svg#logo" />
        </svg>
      </header>
      <div className="pt-10">
        <h1 className="text-paw_black text-44 font-medium">
          Hi!<span>&#128075;</span>
        </h1>
        <p className="text-paw_grey text-20">
          Welcome to MacPaw Bootcamp 2023
        </p>
      </div>
      <div className="pt-12">
        <p className="text-paw_black text-20 py-4">Lets start using The Cat API</p>
        <div className="flex gap-x-8 w-full">
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
    </div>
   );
}
 
export default DefaultLayout;