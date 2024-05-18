import {useState} from 'react'
import {useDispatch} from "react-redux";
import {addCity} from "../redux/citiesSlice.js";

// eslint-disable-next-line react/prop-types
function CardForm() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({title: "", description: "", imgURL: "", isVisited: false});

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: name === 'isVisited' ? event.target.checked : value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const city = {
            id: Math.random(),
            title: formData.title,
            description: formData.description,
            imgURL: formData.imgURL,
            isVisited: formData.isVisited
        };
        setFormData({title: "", description: "", imgURL: "", isVisited: false});
        dispatch(addCity(city));
    }
    /*
        const {name, value, type, checked} = event.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setFormData({...formData, [name]: inputValue});
     */
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg">
            <h2 className="text-2xl font-bold">Add a new city</h2>
            <div className="flex flex-col">
                <label>Nome Città</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}></input>
            </div>
            <div className="flex flex-col">
                <label>Descrizione</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}></textarea>
            </div>
            <div className="flex flex-col">
                <label>Immagine</label>
                <input
                    type="text"
                    name="imgURL"
                    value={formData.imgURL}
                    onChange={handleInputChange}></input>
            </div>
            <div className="flex flex-col">
                <label>Visitata?</label>
                <input
                    type="checkbox"
                    name="isVisited"
                    checked={formData.isVisited}
                    onChange={handleInputChange}/>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Aggiungi Card</button>

        </form>
    );
}

export default CardForm;