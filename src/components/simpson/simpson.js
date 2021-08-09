import './simpson.css';

export function Simpson({name, surname, age, info, photo}) {
    return <div className={'simpson'}>
        <div>
            <h3>{name} {surname}</h3>
            <p>Age: {age}</p>
            <p>{info}</p>
        </div>
        <img src={photo} alt=""/>
    </div>
}