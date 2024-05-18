function CardItem({ title, imgURL, isVisited, children}) {
    return (
        <div className="rounded-md bg-zinc-950 hover:scale-110 transition-transform">
            <img
                src={imgURL}
                alt="Placeholder"/>
            <div className="flex flex-col p-4">
                <h1 className="text-2xl  font-bold">{title}</h1>
                <p className="text-grey-500">{children}</p>
                {isVisited && <span> ✅ visitata </span>}
                {!isVisited && <span> ❌ non visitata </span>}
            </div>
        </div>
    )
}

export default CardItem;