import MapStats from "@/components/MapStats"
import PlayerRender from "@/components/PlayerRender"
import { formatNumber } from "@/libs/number"

export default async function User({params}) {
    const user = await getUser(params.uuid)

    return (
        <div className="flex flex-col space-y-10 mt-20 lg:mt-0">
            <a href="/" className="absolute flex justify-center items-center top-5 left-5 space-x-2">
                <div className="relative w-10 h-10">
                    <img src='/images/favicon.png' />
                </div>
                <p className="text-xl text-white">Back</p>
            </a>
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-center gap-y-10 lg:gap-y-0 lg:space-x-5">
                <PlayerRender user={user} />
                <div className="flex self-center flex-col">
                    <div className="flex space-x-2 text-2xl">
                        <p className="text-amber-500">Games played:</p> 
                        <p className="text-white">{formatNumber(user?.gameCount)}</p> 
                    </div>
                    <div className="flex space-x-2 text-2xl">
                        <p className="text-amber-500">Rounds played:</p> 
                        <p className="text-white">{formatNumber(user?.roundCount)}</p> 
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 justify-center p-10">
                {user?.maps?.map(map =>
                    <MapStats map={map} />    
                )}
            </div>
        </div>
    )
}

async function getUser(uuid) {
    let user
    
    try {
        const data = await fetch(`${process.env.HOST}user?token=${process.env.TOKEN}&uuid=${uuid}`)
        user = await data.json()
        user.uuid = uuid;
    } catch {}
    await new Promise(r => setTimeout(r, 2000));
  
    return user
}