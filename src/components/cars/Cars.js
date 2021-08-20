import {useEffect, useState} from "react";
import Car from "../car/Car";
import {deleteCarAPI, getCars, getChosenCar} from "../../services/form.api.service";

export default function Cars({editCar, updateCar}) {
    let [cars, setCars] = useState([]);
    let [choseCar, setChoseCar] = useState({});

    useEffect(() => {
        getCars().then(cars => setCars([...cars]))
    }, [cars]);
    let deleteCar = (id) => {
        deleteCarAPI(id);
    }
    let update = () => {
        updateCar(choseCar);
    }
    const edit = (car) => {
        getChosenCar(car.id).then(value => setChoseCar({...value}))
        editCar(choseCar)
    }
    return (
        <div>
            <h2>Cars</h2>
            {
                cars.map(car => <Car key={car.id} car={car} deleteCar={deleteCar} edit={edit} update={update}/>)
            }
        </div>
    );
}