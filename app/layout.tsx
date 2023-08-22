import './globals.css'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import DefaultLayout from './components/Default'

const jost = Jost({
  subsets: ['latin-ext'],
  weight: ['200', '300', '400', '500', '600', '700']
})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jost.className} bg-[#F8F8F7]`}>
        <main className='flex justify-between'>
          <div className='w-1/2'>
            <DefaultLayout  />
          </div>
          <section className='w-1/2 bg-green-100 fixed left-1/2 inset-y-0 flex-col'>
            <div className='overflow-y-auto'>
              {children}
            </div>
          </section>
        </main>
      </body>
    </html>
  )
}
