import MapStats from "@/components/MapStats"
import PlayerRender from "@/components/PlayerRender"

export default async function User({params}) {
    const user = await getUser(params.uuid)
    console.log(user)

    return (
        <div className="flex flex-col space-y-10">
            <a href="/" className="absolute flex justify-center items-center top-5 left-5 space-x-2">
                <div className="relative w-10 h-10">
                    <img src='/images/favicon.png' />
                </div>
                <p className="text-xl text-white">Back</p>
            </a>
            <div className="flex flex-col items-center space-y-10">
                <PlayerRender user={user} />
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