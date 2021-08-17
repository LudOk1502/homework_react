import {useEffect, useState} from "react";
import {getCar} from "../../services/car.service";
import Car from "../car/Car";

export default function Cars() {
    let [cars, setCars] = useState([]);
    useEffect(() => {
        getCar().then(cars => setCars([...cars]))
    }, [])
    return (
        <div>
            <h2>Cars</h2>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
}