'use client'

import React, { useCallback, useEffect, useState } from "react"
import LeaderboardList from "./LeaderboardList"

const MemoLB = React.memo(LeaderboardList)

const Leaderboard = ({ leaderboard, type }) => {
    const [headerHeight, setHeaderHeight] = useState(0)

    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            setModal(false)
        }
    }, [])
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const style = window.getComputedStyle(document.getElementById("header"), null)
            const style2 = window.getComputedStyle(document.getElementById("header2"), null)
            setHeaderHeight(Number(style.getPropertyValue("height").replace("px", '')) + Number(style2.getPropertyValue("height").replace("px", '')))
            
            document.addEventListener("keydown", escFunction, false);
            return () => {
                document.removeEventListener("keydown", escFunction, false);
            }
        }
    }, [])

    return (
        <>
            <a href="/leaderboards" id="header" className='flex justify-center items-center h-20'>
                <div 
                    id="header2"
                    className='cursor-pointer backdrop-blur-sm z-40 fixed flex justify-center items-center flex-col w-full bg-[#202020aa] duration-200 border-[#404040]'
                >
                    <p className={`duration-200 text-xl lg:text-3xl text-amber-300`}>{type.replace("%20", " ")}</p>
                    <p className='duration-200 text-sm lg:text-lg text-white'>
                        (Click to change)</p>
                </div>
            </a>
            <MemoLB lb={leaderboard} headerHeight={headerHeight} />
        </>
    )
}

export default Leaderboard