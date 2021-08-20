export default function Car({car, deleteCar, edit, update}) {

    let onClickDeleteCar = () => {
        deleteCar(car.id);
    }

    let onClickEditCar = () => {
        edit(car);
        update(car);
    }
    return (
        <div>
            <p>Id: {car.id} - Model: {car.model} - Price: {car.price} - Year: {car.year}</p>
            <button onClick={onClickDeleteCar}>Delete</button>
            <button onClick={onClickEditCar}>Edit</button>
        </div>
    );
}