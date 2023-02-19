import LeaderboardListLoader from "@/components/LeaderboardListLoader"
import { Suspense } from "react"
import Loading from "./loading"

export default async function Player() {
    return (
        <Suspense fallback={<Loading />} >
            <LeaderboardListLoader />
        </Suspense>
    )
}