export default async function Head({params}) {
    const user = await getUser(params.uuid)
    return (
        <>
            <title>{`Workshop - ${user?.name}`}</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content={`Look at ${user?.name} Workshop stats!`} />
            <link rel="icon" href="/images/favicon.png" />
        </>
    )
}

async function getUser(uuid) {
    try {
        const data = await fetch(`${process.env.HOST}user?token=${process.env.TOKEN}&uuid=${uuid}`, { next: { revalidate: 10 } })
        let user
        user = await data.json()
        return user
    } catch {}
}
