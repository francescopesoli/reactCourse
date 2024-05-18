import {increment,decrement} from "../redux/counterSlice.js";
import {useSelector, useDispatch} from "react-redux";

function Example() {
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
    /*
    Removed the following code snippet from my-vue-app/src/components/Example.jsx: for use Context API
    const [count, setCount] = useState(0);


    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log("useEffect");
    }, [count]);

     */

    /* senza dipendenze specifiche ogni volta che il componente viene
    renderizzato viene eseguito il codice all'interno di useEffect
    se si vuole eseguire il codice solo una volta all'inizio si può passare un array vuoto
    come secondo argomento di useEffect
    se si vuole eseguire il codice solo quando una variabile cambia si può passare un array
    con la variabile come secondo argomento di useEffect
    */
    return (
        <div>
            <h1>Conteggio: {count}</h1>
            <button onClick={() => dispatch(increment())}>Incrementa +</button>
            <button onClick={() => dispatch(decrement())}>Decrementa -</button>
        </div>
    );
}

export default Example;