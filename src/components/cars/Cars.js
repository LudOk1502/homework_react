import Car from "../car/Car";
import {deleteCarAPI, getCars} from "../../services/form.api.service";
import {useEffect, useState} from "react";

export default function Cars({editCar}) {
    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(cars => setCars([...cars]))
    }, [cars]);

    let deleteCar = (id) => {
        deleteCarAPI(id);
    }
    return (
        <div>
            <h2>Cars</h2>
            {
                cars.map(car => <Car key={car.id} car={car} deleteCar={deleteCar} editCar={editCar}/>)
            }
        </div>
    );
}