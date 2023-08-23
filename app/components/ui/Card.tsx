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
    <div className="md:w-138 block">
      <Link
        href={path}
        className={`
          ${variant === 'voting'
          ? 'bg-[#B4B7FF] border-voting'
          : variant === 'breeds'
          ? 'bg-[#97EAB9] border-breed'
          : 'bg-[#FFD280] border-gallery'
        }
          rounded-20 border-solid border-4 w-full h-[198px] md:flex items-center justify-center mb-5 hidden`
        }>
        <Image
          src={imgPath}
          alt="pet"
          width={100}
          height={125}
          style={{width: 'auto', height: 'auto'}}
        />
      </Link>
      <Link 
        href={path} 
        className={`${pathname === `/${path}` ? 'bg-paw_pry text-white' : 'bg-white text-paw_pry'} uppercase flex items-center justify-center w-full  rounded-[10px] py-3 text-paw_pry text-12 hover:bg-hover_pry dark:bg-black_10 dark:text-paw_pry`}>
          {variant}
      </Link>
    </div>
   );
}
 
export default Card;