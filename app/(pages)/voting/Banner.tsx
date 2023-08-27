'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";
import UserActionLogs from "./UserActionLogs";

const Banner = () => {

  const pathname = usePathname()

  return ( 
    <div className="bg-white rounded-20 min-h-screen dark:bg-bgg">
      <div className="px-5 py-7">
        <div className="flex gap-x-4">
          <button className="w-10 h-10 bg-hover_pry text-paw_pry flex justify-center items-center rounded-[10px]">
            <svg width="7" height="12" viewBox="0 0 7 12">
              <use xlinkHref="/sprite.svg#prev" />
            </svg>
          </button>
          <div className="w-[146px] bg-paw_pry h-10 rounded-10 text-white flex justify-center items-center">
            <h2 className="uppercase">Voting</h2>
          </div>
        </div>
        <div className="w-full py-4">
          <div className="w-full">
            <Image 
              src={'/assets/images/banner.png'} 
              width={640} 
              height={360} 
              alt="cat"  
              priority
              objectFit="contain"
            />
          </div>
          <div className="mt-10">
            <UserActionLogs  />
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Banner;