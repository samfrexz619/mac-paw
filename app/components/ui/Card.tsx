'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CardProps {
  variant: string;
  imgPath: string;
  path: string;
}

const Card = ({ variant, imgPath, path}: CardProps) => {

  const pathname = usePathname()  

  return ( 
    <div className="w-138 block">
      <div
        className={`
          ${variant === 'voting'
          ? 'bg-[#B4B7FF] border-voting'
          : variant === 'breeds'
          ? 'bg-[#97EAB9] border-breed'
          : 'bg-[#FFD280] border-gallery'
        }
          rounded-20 border-solid border-4 w-full h-[198px] flex items-center justify-center mb-5`
        }>
        <Image
          src={imgPath}
          alt="pet"
          width={100}
          height={125}
          style={{width: 'auto', height: 'auto'}}
        />
      </div>
      <Link 
        href={path} 
        className={`${pathname === `/${path}` ? 'bg-paw_pry text-white' : 'bg-white text-paw_pry'} uppercase flex items-center justify-center w-full  rounded-[10px] py-3 text-paw_pry text-12 hover:bg-hover_pry`}>
          {variant}
      </Link>
    </div>
   );
}
 
export default Card;