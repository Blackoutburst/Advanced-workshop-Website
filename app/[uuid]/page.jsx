import PlayerRender from "@/components/PlayerRender"

export default async function User({params}) {
    const user = await getUser(params.uuid)

    return (
        <div className="flex flex-col space-y-10">
            <a href="/" className="absolute flex justify-center items-center top-5 left-5 space-x-2">
                <div className="relative w-10 h-10">
                    <img src='/images/favicon.png' />
                </div>
                <p className="text-xl text-white">Back</p>
            </a>
            <div>
                <div className="flex flex-row flex-wrap max-w-screen mx-10 lg:mx-20 justify-evenly mt-10 lg:mt-20 gap-10 lg:mb-0">
                    <PlayerRender user={user} />
                </div>
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