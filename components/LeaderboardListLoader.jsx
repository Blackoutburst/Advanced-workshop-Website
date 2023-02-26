import LeaderboardDisplayList from "./LeaderboardDisplayList"

const LeaderboardListLoader = async () => {
    const leaderboards = await getLeaderboards()

    return (
        <LeaderboardDisplayList leaderboards={leaderboards} />
    )
}

export default LeaderboardListLoader

async function getLeaderboards() {
    let lbs
    
    try {
        const data = await fetch(`${process.env.HOST}leaderboards?token=${process.env.TOKEN}`, { next: { revalidate: 10 } })
        lbs = await data.json()
    } catch {}
        return lbs?.leaderboards.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0))
}