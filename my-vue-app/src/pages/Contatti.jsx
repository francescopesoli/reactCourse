import Navbar from "../components/Navbar.jsx";
import useCounterProva from "../hooks/useCounterProva.jsx";

function Contatti() {
    useCounterProva();
    return (
        <>
            <Navbar></Navbar>
            <div className="flex justify-center items-center h-screen bg-gray-200">
                <h1 className="text-6xl">Contatti</h1>
            </div>
        </>
    );
}

export default Contatti;