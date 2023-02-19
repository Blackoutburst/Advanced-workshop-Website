export default async function User() {

    return (
        <div className="flex flex-col space-y-10 mt-20 lg:mt-0">
        <div className="flex justify-center">
            <div className="w-64 h-96 bg-neutral-600 rounded-lg p-4 animate-pulse"/>
        </div>
            <div className="flex flex-wrap gap-10 justify-center p-10">
                <div className="w-72 h-64 bg-neutral-600 rounded-lg p-3 animate-pulse"/>
                <div className="w-72 h-64 bg-neutral-600 rounded-lg p-3 animate-pulse"/>
                <div className="w-72 h-64 bg-neutral-600 rounded-lg p-3 animate-pulse"/>
                <div className="w-72 h-64 bg-neutral-600 rounded-lg p-3 animate-pulse"/>
                <div className="w-72 h-64 bg-neutral-600 rounded-lg p-3 animate-pulse"/>
            </div>
        </div>
    )
}