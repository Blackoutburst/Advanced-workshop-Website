'use client'

import { formatNumber } from "@/libs/number"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { List } from "react-virtualized"

const LeaderboardList = ({ lb, headerHeight }) => {
    const list = lb?.filter(player => player.value != 0).sort((a,b) => Number.isInteger(a.value) ? (b.value > a.value) ? 1 : ((a.value > b.value) ? -1 : 0) : (parseFloat(a.value) > parseFloat(b.value)) ? 1 : ((parseFloat(b.value) > parseFloat(a.value)) ? -1 : 0))

    const [windowSize, setWindowSize] = useState({width: 0, height: 0})
    const [listWidth, setListWidth] = useState(0)

    const rowHeight = windowSize.width < 1024 ? 56 : 60

    useEffect(() => {
        if (typeof window !== 'undefined') {

            const style = window.getComputedStyle(document.getElementById("list"), null)
            setListWidth(Number(style.getPropertyValue("width").replace("px", '')))


            function handleResize() {
                setWindowSize({width: window.innerWidth, height: window.innerHeight})
            }
        
            window.addEventListener("resize", handleResize)
            handleResize()

            return () => {
                window.removeEventListener("resize", handleResize)
            }
        }
    }, [windowSize.width])

    const renderRow = ({ index, key, style }) => {
        return (
            <div style={style} key={key}>
                <Link prefetch={false} href={`/${list[index].uuid}`}>
                    <div className={`w-full p-4 shadow-lg ${index % 2 == 0 ? "bg-[#404040]" : "bg-[#303030]"}`}>
                        <div className="flex w-full items-center justify-between">
                            <div className="flex items-center lg:space-x-10">
                                <p className={`w-14 lg:text-xl text-transparent bg-clip-text bg-gradient-to-r ${index == 0 ? "from-amber-300 to-yellow-500" : index == 1 ? "from-white to-gray-400" : index == 2 ? "from-amber-500 to-yellow-500" : "from-stone-300 to-neutral-600"}`}>{`#${index + 1}`}</p>
                                <p className='lg:text-xl text-white'>{list[index]?.name}</p>
                            </div>
                            <p className={`lg:text-xl ${index == 0 ? "text-amber-300" : index == 1 ? "text-white" : index == 2 ? "text-amber-500" : "text-stone-300"}`}>{`${Number.isInteger(list[index].value) ? formatNumber(list[index].value) : list[index].value}${!Number.isInteger(list[index].value) ? 's' : ''}`}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }

    return (
        <div id="list" className="flex flex-col flex-wrap max-w-screen lg:mx-20">
            <List
                className="lg:rounded-lg border-[#606060] border-y lg:border scrollbar-hide overflow-hidden"
                width={listWidth}
                height={windowSize.height - headerHeight}
                rowHeight={rowHeight}
                rowRenderer={renderRow}
                rowCount={list.length} 
            />
        </div>
    )
}

export default LeaderboardList