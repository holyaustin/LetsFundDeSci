import React from 'react'
import { MdChevronRight } from 'react-icons/md'
import { LuBadgeCheck } from 'react-icons/lu'
import Link from 'next/link'

const Quote = () => {
  return (
    <div className="bg-green-600 text-white py-10 my-10">
      <div className="text-white lg:w-3/4 w-full mx-auto space-y-4 mt-2 px-8 lg:px-0 text-justify">
        <h3 className="font-semibold flex justify-start items-center space-x-1 text-2xl">
          <LuBadgeCheck />
          <span>What Is DeSci? </span>
        </h3>
        <h1 className="font-semibold text-5xl">We've got you covered.</h1>
        <p className="w-full lg:w-3/4 font-semibold">
        DeSci aims to democratize and accelerate scientific progress by leveraging blockchain technology, cryptocurrencies, open-source principles, and community-driven initiatives.
        </p>
        <p className="w-full lg:w-3/4 font-semibold">
        Decentralized science (also known as DeSci) is an area of Web3 that aims to change the way research functions. It utilizes the three pillars of blockchain to address some of the issues endemic to traditional science, especially access, participation, and funding.
        </p>

        <div className='flex'>
          <Link
            href={'/donations/create'}
            className="bg-white text-green-600 px-4 space-x-1
            flex justify-center items-center rounded-full text-center py-3
            transition duration-300 ease-in-out hover:bg-green-600 hover:text-white"
          >
            <MdChevronRight size={25} />
            <span>Start a LetsFund</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Quote
