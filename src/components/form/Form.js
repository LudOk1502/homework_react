import {useState} from "react";
import {saveCar, updateCarAPI} from "../../services/form.api.service";
import Cars from "../cars/Cars";

export default function Form() {
    let [formState, setFormState] = useState({model: '', price: '', year: ''});
    let [buttonName, setButtonName] = useState('Save');

    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    };

    let e = (e) => {
        e.preventDefault();
    };

    let editCar = (car) => {
        setFormState({model: car.model, price: car.price, year: car.year});
        setButtonName('Save changes');
    }
    let updateCar = (car) => {
        if (buttonName === 'Save changes') {
            updateCarAPI(car);
        } else saveCar(formState)
    };
    return (
        <div>
            <form onSubmit={e}>
                <h3>+ Додати новий автомобіль +</h3>
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
                <button onClick={updateCar}>{buttonName}</button>
            </form>
            <Cars editCar={editCar} updateCar={updateCar}/>
        </div>
    );
}