import React from 'react'

function LocalOfficialItem({imageUrl, name, position, description}) {
  return (
    <div className='h-full'>
        <div class="grid place-items-center bg-transparent antialiased text-gray-900">
        <div>
            
            <img src={imageUrl} alt=" random imgee" class="w-full h-full object-cover object-center rounded-lg shadow-md"/>    
            
        <div class="relative px-4 -mt-16  ">
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="flex items-baseline">
            <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                New
            </span>
            <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
            2 baths  &bull; 3 rooms
        </div>  
            </div>
            
            <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{name}</h4>
        
        <div class="mt-1">
            {position}
            <span class="text-gray-600 text-sm"></span>
        </div>
            <p>{description}</p>
        </div>
        </div>
        
        </div>
        </div>
    </div>
  )
}

export default LocalOfficialItem