'use client'
import { formatNumber } from "@/libs/number"
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
                <p className="text-white">{formatNumber(map.gameCount)}</p> 
            </div>
            <div className="flex space-x-2 text-xl">
                <p className="text-amber-500">Rounds played:</p> 
                <p className="text-white">{formatNumber(map.roundCount)}</p> 
            </div>
            <div className="flex space-x-2 text-xl">
                <p className="text-amber-500">Best time:</p> 
                <p className="text-white">{map.time}s</p> 
            </div>
            <div className="flex space-x-2 text-xl">
                <p className="text-amber-500">1m crafts:</p> 
                <p className="text-white">{formatNumber(map.m1crafts)}</p> 
            </div>
            <div className="flex space-x-2 text-xl">
                <p className="text-amber-500">90s crafts:</p> 
                <p className="text-white">{formatNumber(map.s90crafts)}</p> 
            </div>
            <div className="flex space-x-2 text-xl">
                <p className="text-amber-500">2m crafts:</p> 
                <p className="text-white">{formatNumber(map.m2crafts)}</p> 
            </div>
            <div className="flex space-x-2 text-xl">
                <p className="text-amber-500">5m crafts:</p> 
                <p className="text-white">{formatNumber(map.m5crafts)}</p> 
            </div>
            <div className="flex space-x-2 text-xl">
                <p className="text-amber-500">All crafts:</p> 
                <p className="text-white">{map.allCrafts}s</p> 
            </div>
            <div className="flex space-x-2 text-xl">
                <p className="text-amber-500">HS time:</p> 
                <p className="text-white">{map.HStime}s</p> 
            </div>
            <div className="flex space-x-2 text-xl">
                <p className="text-amber-500">HS time all:</p> 
                <p className="text-white">{map.HStimeAll}s</p> 
            </div>
            <div className="flex space-x-2 text-xl">
                <p className="text-amber-500">10s crafts:</p> 
                <p className="text-white">{formatNumber(map.time10)}</p> 
            </div>
            <div className="flex space-x-2 text-xl">
                <p className="text-amber-500">15s crafts:</p> 
                <p className="text-white">{formatNumber(map.time15)}</p> 
            </div>

            {!open && <p className='text-white text-base mt-3'>(Click to reaveal crafts)</p>}
            {open &&
                <>
                    <p className={`text-amber-300 text-base ${open && 'my-3'}`}>Crafts stats</p>
                    {map.crafts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(craft =>
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
