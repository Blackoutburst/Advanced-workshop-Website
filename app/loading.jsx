export default function Loading() {

    const fakeData = [
        "kflmer",
        "frerrfrf",
        "ferlmf",
        "fkerlmfker",
        "fkerlfkerlfk",
        "frel",
        "fkrelfrelf",
        "freklf",
        "frekfle",
        "fkremlfkre",
        "fkerlferref",
        "ferkl",
        "frkjlf",
        "jrelkfgjerkl",
        "jflkreg",
        "hrtjglkrjfe",
        "ezfzef",
        "ffffffzfzef",
        "hytrfedzde",
    ]

    return (
        <div>
            <div className="h-32 lg:h-40 select-none">
                <div className={`flex justify-center items-center flex-col w-full h-24 lg:h-32`}>
                    <div className="blur-none outline-none text-transparent lg:text-xl w-[90%] lg:w-2/3 bg-neutral-600 rounded-lg p-4 animate-pulse">w</div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap max-w-screen justify-evenly gap-5 mx-5 lg:gap-10 lg:mx-20 mb-20">
                {[...fakeData, ...fakeData].map((txt, index) => (
                    <div key={`txt-${index}`} className="data-button-ske">
                        <p className="text-base lg:text-xl text-transparent">{txt}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}