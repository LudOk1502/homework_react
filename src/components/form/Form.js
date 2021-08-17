import './Form.css'
import {useState} from "react";
import {saveCar} from "../../services/form.api.service";
import Cars from "../cars/Cars";

export default function Form() {
    let [formState, setFormState] = useState({model: '', price: '', year: ''});
    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    let save = (e) => {
        e.preventDefault();
        saveCar(formState);
    }
    return (
        <div>
            <form onSubmit={save}>
                <h2>+ Додати новий автомобіль +</h2>
                <p>Введіть модель:<br/>
                    <input type="text" name={'model'} maxLength={20} value={formState.model}
                           onChange={onFormInputChange}/></p>
                <p>Введіть ціну:<br/>
                    <input type="number" name={'price'} min={0} value={formState.price} onChange={onFormInputChange}/>
                </p>
                <p>Введіть рік випуску:<br/>
                    <input type="number" name={'year'} min={1990} max={2021} value={formState.year}
                           onChange={onFormInputChange}/>
                </p>
                <button>Save</button>
            </form>
            <Cars/>
        </div>
    );
}

