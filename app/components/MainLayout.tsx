'use client'
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchInput from "./ui/SearchInput";
import Link from "next/link";
import EmojiIcons from "./ui/EmojiIcon";
import MobileNavigation from "./MobileNav";
// import { AppProvider } from "@/context/AppContext";

interface Props {
  children: React.ReactNode
}

const MainLayout = ({children}: Props) => {

  const emojiLinks = [
    {
      path: '/likes',
      emoji: 'like',
      id: 2
    },
    {
      path: '/favorites',
      emoji: 'favorite',
      id: 1
    },
    {
      path: '/dislikes',
      emoji: 'sad',
      id: 3
    },
  ]

  const pathname = usePathname()  

  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)

  const handleNavigation =()=> {
    setShowMobileNav(prev => !prev)
  }

  return ( 
    <>
      { pathname !== '/' &&
        <header className="py-10 px-7 w-full items-center justify-between">
          <div className="flex lg:flex-row w-full justify-between lg:gap-x-3 flex-wrap lg:flex-nowrap gap-y-5">
            <button onClick={handleNavigation} className="lg:hidden h-606 w-606 block bg-white rounded-20 text-paw_pry dark:bg-bgg">
              <span className="w-full flex justify-center items-center h-full mt-1">
                <svg width='30' height='30' viewBox='0 0 30 30'>
                  <use xlinkHref="/sprite.svg#menu" />
                </svg>
              </span>
            </button>
            <div className="lg:w-[420px] w-full order-3 lg:order-1">
              <SearchInput
                placeholder="Search for breeds by name"
              />
            </div>
            <div className="flex gap-x-3 order-2 lg:order-1">
              {
                emojiLinks.map(emoji => (
                  <Link key={emoji.id} href={`${emoji.path}`} 
                    className={` h-606 w-606 rounded-20 flex justify-center items-center dark:bg-bgg ${pathname === emoji.path ? 'bg-paw_pry text-white' : 'bg-white text-paw_pry'}`}>
                    <EmojiIcons name={emoji.emoji} />
                  </Link>
                ))
              }
            </div>
          </div>
        </header>
     }
      <main>
        {children}
      </main>
     { showMobileNav && <MobileNavigation toggleNav={handleNavigation} />}
    </>
   );
}
 
export default MainLayout;