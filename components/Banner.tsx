import Link from 'next/link'
import React from 'react'
import { MdSunnySnowing } from 'react-icons/md'

const IMAGE_BANNER = 'https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/uploads/2024-10/01926d5a-409a-758a-9761-8b7841067085'
const Banner: React.FC<{ mine?: boolean }> = ({ mine }) => {
  return (
    <div
      style={{ backgroundImage: 'url(' + IMAGE_BANNER + ')' }}
      className="relative w-full h-[36rem] flex items-center justify-center text-white
      bg-no-repeat bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
      <div className="flex flex-col justify-end text-pink-400 p-8 space-y-8 relative z-10 h-80">
        {!mine ? (
          <h1 className="text-5xl text-center font-semibold">
            Lets Fund <br /> <br /> Decentralised Science (DeSci)
          </h1>
        ) : (
          <h1 className="text-7xl text-center font-semibold">
            DeSci <br /> Projects
          </h1>
        )}
        <br />
        <Link
          href={'/donations/create'}
          className="bg-white text-green-600 px-4 space-x-1 font-bold
        flex justify-center items-center rounded-full text-center py-3
        transition duration-300 ease-in-out hover:bg-green-600 hover:text-white"
        >
          <MdSunnySnowing size={25} />
          <span>Create a Project</span>
        </Link>
      </div>
    </div>
  )
}

export default Banner
