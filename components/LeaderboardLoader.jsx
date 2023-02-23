import Leaderboard from "./Leaderboard"

const LeaderboardLoader = async ({type}) => {
    const leaderboard = await getLeaderboard(type)

    return (
        <Leaderboard leaderboard={leaderboard} type={type} />
    )
}

export default LeaderboardLoader

async function getLeaderboard(type) {
    let lbs
    try {
        const data = await fetch(`${process.env.HOST}leaderboard?token=${process.env.TOKEN}&type=${type}`, { cache: 'no-store' })
        lbs = await data.json()
    } catch {}

    return lbs.players
}