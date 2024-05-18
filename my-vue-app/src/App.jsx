import './App.css'
import CardItem from "./components/CardItem.jsx";
import CardForm from "./components/CardForm.jsx";
import Example from "./components/Example.jsx";
import {useSelector} from "react-redux";
import Navbar from "./components/Navbar.jsx";

function App() {
    const cities = useSelector((state) => state.cities.value);
    return (
        <>
            <Navbar></Navbar>
            <Example></Example>
            <CardForm></CardForm>
        </>
    )
}

export default App;
