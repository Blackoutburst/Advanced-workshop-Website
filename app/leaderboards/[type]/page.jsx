import LeaderboardLoader from "@/components/LeaderboardLoader"
import { Suspense } from "react"
import Loading from "./loading"

export default async function LeaderboardPage({ params }) {
    return (
        <Suspense fallback={<Loading />} >
            <LeaderboardLoader type={params.type} />
        </Suspense>
    )
}