export default function Car({car, deleteCar, editCar}) {

    let onClickDeleteCar = () => {
        deleteCar(car.id);
    }

    let onClickEditCar = () => {
        editCar(car);
    }

    return (
        <div>
            <p>Id: {car.id} - Model: {car.model} - Price: {car.price} - Year: {car.year}</p>
            <button className={'btn_delete'} onClick={onClickDeleteCar}>Delete</button>
            <button className={'btn_edit'} onClick={onClickEditCar}>Edit</button>

        </div>
    );
}