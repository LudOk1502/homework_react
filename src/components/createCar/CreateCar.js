import {useState} from "react";
import {saveCar} from "../../services/car.api.service";
import './CreateCar.css';

export default function CreateCar() {
    let [formState, setFormState] = useState({model: '', price: '', year: ''});


    const onFormSubmit = (e) => {
        e.preventDefault();
    }

    const onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    const onSaveClick = () => {
        saveCar(formState).then((json) => console.log(json));
    }

    return (
        <div className={'wrap_new_car'}>

            <form className={'new_car'} onSubmit={onFormSubmit}>
                <h2>Новий автомобіль</h2>
                <p>Введіть модель:<br/>
                    <input type="text" name={'model'} maxLength={20} value={formState.model}
                           onChange={onFormInputChange}/></p>
                <p>Введіть ціну:<br/>
                    <input type="number" name={'price'} min={0} value={formState.price} onChange={onFormInputChange}/>
                </p>
                <p>Введіть рік випуску:<br/>
                    <input type="number" name={'year'} min={1990} max={2021} value={formState.year}
                           onChange={onFormInputChange}/></p>
                <button className={'btn_save'} onClick={onSaveClick}>Save</button>
            </form>

        </div>
    );
}
