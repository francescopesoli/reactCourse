import Navbar from "../components/Navbar.jsx";
import CardItem from "../components/CardItem.jsx";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

function Cards() {
    const {cityID} = useParams();
    console.log(cityID);

    const city = useSelector((state) => state.cities.value.filter((city) => city.id === cityID));

    console.log(city);
    return (
        <>
            <Navbar></Navbar>
            <h1 className="text-4xl text-center">{city[0].title}</h1>
            <div className="grid grid-cols-4 gap-10">
                <div className="rounded-md bg-zinc-950 hover:scale-110 transition-transform">
                    <img
                        src={city[0].imgURL}
                        alt="Placeholder"/>
                    <div className="flex flex-col p-4">
                        <p className="text-grey-500">{city[0].description}</p>
                        {city[0].isVisited && <span> ✅ visitata </span>}
                        {!city[0].isVisited && <span> ❌ non visitata </span>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;