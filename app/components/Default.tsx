'use client'

import { useState } from "react";
import { cardItems } from "@/lib/utils";
import Card from "./ui/Card";
import ToggleSwitch from "./ui/ToggleSwitch";

const DefaultLayout = () => {

  const [isToggled, setIsToggled] = useState(false)

  const handleToggle =()=> {
    setIsToggled(!isToggled)
  }

  return ( 
    <div className="lg:w-3/4 w-11/12 mx-auto h-screen">
      <header className="w-full h-24 items-center flex justify-between">
        <span className="flex gap-x-2 py-1 items-center">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="/sprite.svg#logo" />
          </svg>
          <h1 className="text-paw_black dark:text-white text-2xl font-medium">PetsPaw</h1>
        </span>
       <div>
        <ToggleSwitch 
          isToggled={isToggled} 
          onToggled={handleToggle} 
        />
       </div>
      </header>
      <div className="pt-10">
        <h1 className="text-paw_black text-44 font-medium dark:text-white">
          Hi!<span>&#128075;</span>
        </h1>
        <p className="text-paw_grey text-20">
          Welcome to MacPaw Bootcamp 2023
        </p>
      </div>
      <div className="pt-12">
        <p className="text-paw_black text-20 py-6 dark:text-white">
          Lets start using The Cat API
        </p>
        <div className="flex lg:gap-x-8 w-full flex-col gap-y-5 lg:flex-row">
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