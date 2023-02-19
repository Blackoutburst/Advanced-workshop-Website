export default function Head({params}) {
  return (
    <>
      <title>{`Workshop - ${params?.type}`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={`Check out the ${params?.type} leaderboards!`} />
      <link rel="icon" href="/images/favicon.png" />
    </>
  )
}
