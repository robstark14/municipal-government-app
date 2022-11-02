import React from 'react'
import { Link } from 'react-router-dom'

function EOcard({title,number,docUrl}) {
  return (
    <a class="flex justify-center " href={docUrl} target="_blank" >
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg hover:bg-sky-600">
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900  text-xl font-medium mb-2">{number}</h5>
      <p class="text-gray-700  text-base mb-4">
            {title}
      </p>
      {/* <p class="text-gray-600 text-xs">Last updated 3 mins ago</p> */}
    </div>
  </div>
</a>
  )
}

export default EOcard