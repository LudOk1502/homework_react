import {useState} from "react";
import Cars from "../cars/Cars";
import {saveCar, updateCarAPI} from "../../services/form.api.service";
import './Form.css';

export default function Form() {
    let [formState, setFormState] = useState({model: '', price: '', year: ''});
    let [toggle, setToggle] = useState('Save');

    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    };

    let onFormSubmit = (e) => {
        e.preventDefault();
    };

    let editCar = (car) => {
        setFormState({model: car.model, price: car.price, year: car.year, id: car.id});
        setToggle('Update');
    };

    let onSaveClick = () => {
        formState.id ? updateCarAPI(formState.id, formState).then((json) => console.log(json)) :
            saveCar(formState).then((json) => console.log(json));
        setFormState({model: '', price: '', year: ''});
        setToggle('Save');
    }
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <h3>+ Додати новий автомобіль +</h3>
                <p>Введіть модель:<br/>
                    <input type="text" name={'model'} maxLength={20} value={formState.model}
                           onChange={onFormInputChange}/></p>
                <p>Введіть ціну:<br/>
                    <input type="number" name={'price'} min={0} value={formState.price}
                           onChange={onFormInputChange}/>
                </p>
                <p>Введіть рік випуску:<br/>
                    <input type="number" name={'year'} min={1990} max={2021} value={formState.year}
                           onChange={onFormInputChange}/>
                </p>
                <button className={'btn_save'} onClick={onSaveClick}>{toggle}</button>
            </form>
            <Cars editCar={editCar}/>
        </div>
    )
}