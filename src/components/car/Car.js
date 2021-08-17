export default function Car({car}) {
    return (
        <div>
            <p>Id: {car.id} - Model: {car.model} - Price: {car.price} - Year: {car.year}</p>
        </div>
    );
}