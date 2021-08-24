import './Car.css';

export default function Car({car}) {
    return (
        <div className={'car'}>
            Id: {car.id} - Model: {car.model} - Price: {car.price} - Year: {car.year}
        </div>
    );
}