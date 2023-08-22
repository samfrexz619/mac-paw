import Image from "next/image";
import Link from "next/link";


interface CardProps {
  variant: string;
  imgPath: string;
  path: string;
}

const Card = ({ variant, imgPath, path}: CardProps) => {
  return ( 
    <div className="w-138">
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
        />
      </div>
      <Link href={path} className="uppercase flex items-center justify-center w-full bg-white rounded-[10px] py-3 text-paw_pry text-12">
          {variant}
        </Link>
    </div>
   );
}
 
export default Card;