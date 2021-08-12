import Geo from "../geo/Geo";

export default function Address({address: {street, suite, city, zipcode, geo}}) {
    return (
        <div>
            address:
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
            <div>zipcode: {zipcode}</div>
            <Geo geo={geo}/>
        </div>
    );
}