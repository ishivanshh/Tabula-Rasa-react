import React from 'react'

function Card() {
  return (
    <div className="flex flex-col items-center p-7 rounded-2xl">

      <div>
        <img
          className="w-50 shadow-xl rounded-md"
          alt="Book Cover"
          src="https://documents.iplt20.com/bcci/articles/1748979521__AIL8656.jpg"
        />
      </div>

      <div className="flex flex-col items-center mt-4">

        <span className="text-2xl font-medium">
          Class of 2025
        </span>

        <span className="text-gray-500">
          Royal Challengers Bengluru
        </span>

        <div className="flex gap-2 text-sm text-gray-400 mt-2">
          <span>No. 1</span>
          <span>18 Points</span>
          <span>2025</span>
        </div>

      </div>

    </div>
  )
}

export default Card