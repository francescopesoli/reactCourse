import Navbar from "../components/Navbar.jsx";
import CardItem from "../components/CardItem.jsx";
import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

function CardsChildren() {
    const cities = useSelector((state) => state.cities.value);

    return (
        <>
            <Navbar></Navbar>
            <h1> Pagina CardsChildren</h1>
            <div className="grid grid-cols-4 gap-5">
                {cities.map((city) => (
                    <Link to={`/cards-children/${city.id}`} key={city.id}>
                        <CardItem
                            isVisited={city.isVisited}
                            title={city.title}
                            imgURL={city.imgURL}
                        >
                            {city.description}
                        </CardItem>
                    </Link>
                ))}
            </div>
            <Outlet/>
        </>
    );
}

export default CardsChildren;