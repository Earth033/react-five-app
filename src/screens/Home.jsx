import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
     <div className="flex flex-col items-center 
                    justify-center h-screen 
                    bg-amber-300">

        <span className="text-4xl font-bold text-gray-500 mb-4">
            Welcome to my Jessadakorn
        </span>
        <div className='flex'>
            <Link to="/sum-number" className="bg-blue-500 hover:bg-fuchsia-600 text-white px-4 py-2 rounded-md mr-2">
                Sum Number
            </Link>
            <Link to="/Bmi-calculator" className="bg-green-500 hover:bg-red-600 text-white px-4 py-2 rounded-md ml-2">
                BMI Calculator
            </Link>
        </div>
    </div> 
    </>
  )
}

export default Home
