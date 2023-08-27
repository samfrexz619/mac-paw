'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CatData } from "@/lib/type";
import ReactionButton from "./ReactionBtn";



interface Props {
  data: CatData[];
  indicator: boolean;
  reaction: boolean;
}

// const imageLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }

const ImageSlider = ({ data, indicator, reaction=false }: Props) => {

  const pathname = usePathname()

  const [current, setCurrent] = useState(0)

  // const nextImage =()=> {
  //   setCurrent(current === data.length - 1 ? 0 : current + 1)
  // }

  const prevImage =()=> {
    setCurrent(current === 0 ? data.length - 1 : current - 1)
  }

  return ( 
    <div className="w-full">
      <div className="flex gap-x-3">
        <button onClick={prevImage} className="w-10 h-10 bg-hover_pry text-paw_pry flex justify-center items-center rounded-10 dark:bg-bgg">
          <svg width="7" height="12" viewBox="0 0 7 12">
            <use xlinkHref="/sprite.svg#prev" />
          </svg>
        </button>
        <div className="h-10 w-36 rounded-10 flex items-center justify-center bg-paw_pry text-white">
          <p className="uppercase">{pathname.slice(1)}</p>
        </div>
      </div>
      <div className={`relative flex items-center w-full justify-center py-5`}>
        <div className="flex w-[640px] h-[360px] aspect-square">
          {
            data?.map((image, idx) => (
              <Image
                placeholder="blur"
                blurDataURL="/assets/images/loader.png"
                key={image.id}
                src={image.url}
                width={640}
                height={360}
                alt="random"
                objectFit="contain"
                className={`${current === idx ? 'w-[640px]' : 'w-[640px] hidden'} rounded-20 aspect-square`}
              />
            ))
          }
        </div>
        {indicator && <span className={`absolute flex bottom-0 gap-x-2 bg-grey_10 h-10 px-5 items-center shadow-sm rounded-20 dark:bg-black_5`}>
          {
            data.map((_, idx)=> (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-3 w-3 rounded-full ${current === idx ? 'bg-paw_pry' : 'bg-hover_pry'}`}></button>
            ))
          }
        </span>}
        { reaction && <div className="absolute -bottom-4">
          <ReactionButton  />
        </div>}
      </div>
    </div>
   );
}
 
export default ImageSlider;