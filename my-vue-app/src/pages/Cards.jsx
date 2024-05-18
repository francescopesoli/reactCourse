import Navbar from "../components/Navbar.jsx";
import CardItem from "../components/CardItem.jsx";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function Cards() {
    const cities = useSelector((state) => state.cities.value);
    return (
        <>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-10">
                {cities.map((city) => (
                    <Link to={`/cities/${city.id}`} key={city.id}>
                        <CardItem
                            isVisited={city.isVisited}
                            title={city.title}
                            imgURL={city.imgURL}>
                            {city.description}
                        </CardItem>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Cards;