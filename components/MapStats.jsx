'use client'
import { useState } from "react"

const MapStats = ({map}) => {

    let [open, setOpen] = useState()

    return (
        <div 
            onClick={() => setOpen(!open)}
            className="cursor-pointer flex flex-col w-72 h-fit bg-[#404040] p-3 rounded-lg shadow-lg border border-[#606060]"
        >
            <p className='text-white text-3xl mb-3'>{map.name}</p>
            <p className='text-amber-300 text-base mb-3'>Overall stats</p>
            <div className="flex space-x-2 text-xl">
                <p className="text-amber-500">Games played:</p> 
                <p className="text-white">{map.gameCount}</p> 
            </div>
            <div className="flex space-x-2 text-xl">
                <p className="text-amber-500">Rounds played:</p> 
                <p className="text-white">{map.roundCount}</p> 
            </div>
            <div className="flex space-x-2 text-xl">
                <p className="text-amber-500">Best time:</p> 
                <p className="text-white">{map.time}s</p> 
            </div>
            {!open && <p className='text-white text-base mt-3'>(Click to reaveal crafts)</p>}
            {open &&
                <>
                    <p className={`text-amber-300 text-base ${open && 'my-3'}`}>Crafts stats</p>
                    {map.crafts.map(craft =>
                        <div className="flex space-x-2 text-xl">
                            <p className="text-amber-500">{craft.name}:</p> 
                            <p className="text-white">{craft.time}s</p> 
                        </div>
                    )}
                </>
            }
        </div>
    )
}

export default MapStats