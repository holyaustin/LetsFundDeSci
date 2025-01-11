import Link from 'next/link'
import React from 'react'
import { MdSunnySnowing } from 'react-icons/md'
import { AiFillDollarCircle } from 'react-icons/ai'
import { AiFillExperiment } from 'react-icons/ai'

const IMAGE_BANNER = 'banner2.png'

const Banner: React.FC<{ mine?: boolean }> = ({ mine }) => {
  return (
    <div
      style={{ backgroundImage: 'url(' + IMAGE_BANNER + ')' }}
      className="relative w-full h-[44rem] flex items-center justify-center text-white
      bg-no-repeat bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
      <div className="flex flex-col justify-center items-center text-pink-500 p-8 space-y-4 relative z-10 h-80">
        {!mine ? (
          <h1 className=" text-center font-semibold 
          [text-shadow:_0_4px_4px_rgb(99_102_241_/_0.8)]
           text-pink-600 text-xl md:text-5xl leading-snug">
            Lets Fund <br /> <br /> Decentralize Science (DeSci)
          </h1>
        ) : (
          <h1 className="text-center font-semibold 
          [text-shadow:_0_4px_4px_rgb(99_102_241_/_0.8)]
           text-pink-600 text-xl md:text-5xl leading-snug">
            Decentralize Science <br /> Projects
          </h1>
        )}
        <br />
        <Link
          href={'/donations/create'}
          className="bg-white text-green-600 w-1/3 px-4 space-x-1 font-bold
        flex justify-center items-center rounded-full text-center py-3
        transition duration-300 ease-in-out hover:bg-green-600 hover:text-white"
        >
          <AiFillExperiment size={25} />
          <span>Create Project</span>
        </Link>

        <Link
          href={'/fund'}
          className="bg-white text-green-600 w-1/3 px-4 space-x-1 font-bold
        flex justify-center items-center rounded-full text-center py-3
        transition duration-300 ease-in-out hover:bg-green-600 hover:text-white"
        >
          < AiFillDollarCircle size={25} />
          <span>Fund Project</span>
        </Link>

      </div>
    </div>
  )
}

export default Banner
