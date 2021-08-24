import {useEffect, useState} from "react";
import {getCars, getChosenCar, updateCar} from "../../services/car.api.service";
import './UpdateCar.css';

export default function UpdateCar() {
    let [cars, setCars] = useState([]);
    let [idCarChange, setIdCarChange] = useState('');
    let [formState, setFormState] = useState({model: '', price: '', year: ''});

    useEffect(() => {
        getCars().then(cars => setCars([...cars]))
    }, [cars])

    const onFormSubmit = (e) => {
        e.preventDefault();
    }

    const onCarChange = (e) => {
        setIdCarChange(e.target.value);
    }

    const onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    let onOkClick = () => {
        getChosenCar(idCarChange).then(car =>
            setFormState({model: car.model, price: car.price, year: car.year}))
    }
    let onUpdateClick = () => {
        updateCar(idCarChange, formState).then((json) => console.log(json));
        setFormState({model: '', price: '', year: ''})
    }
    return (
        <div className={'wrap_update_car'}>
            <div>
                <form onSubmit={onFormSubmit}>
                    <p>Виберіть автомобіль <br/>
                        <select value={idCarChange} onChange={onCarChange}>
                            {
                                cars.map(car => <option value={car.id}>{car.id}.{car.model}-{car.year}</option>)
                            }
                        </select>
                        <button className={'btn_ok'} onClick={onOkClick}>Ok</button>
                    </p>
                </form>
            </div>

            <div>
                <form onSubmit={onFormSubmit}>
                    <p>Модель:<br/>
                        <input type="text" name={'model'} maxLength={20} value={formState.model}
                               onChange={onFormInputChange}/></p>
                    <p>Ціна:<br/>
                        <input type="number" name={'price'} min={0} value={formState.price}
                               onChange={onFormInputChange}/>
                    </p>
                    <p>Рік випуску:<br/>
                        <input type="number" name={'year'} min={1990} max={2021} value={formState.year}
                               onChange={onFormInputChange}/></p>
                    <button className={'btn_update'} onClick={onUpdateClick}>Update</button>
                </form>
            </div>


        </div>
    );
}