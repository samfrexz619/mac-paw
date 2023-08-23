import DefaultLayout from '@/components/Default'
import MobileNavigation from '@/components/MobileNav'


export default function Home() {
  return (
    <>
      <main className="bg-[url('/assets/images/girl-pet.png')] bg-cover bg-no-repeat my-2 lg:h-screen dark:bg-[url('/assets/images/dark-girl.png')]">
      </main>
      <div className='lg:hidden block w-full'>
        <DefaultLayout  />
      </div>
      <MobileNavigation  />
    </>
  )
}
