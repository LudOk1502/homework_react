import {useEffect, useState} from "react";
import {getCars} from "../../services/car.api.service";
import Car from "../car/Car";

export default function Cars() {
    let [cars, setCars] = useState([]);
    useEffect(() => {
        getCars().then(cars => setCars([...cars]))
    }, [cars]);
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
}