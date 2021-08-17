const saveCar = (car) => {
    fetch('http://195.72.146.25/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        }
    }).then(respons => respons.json())
        .then((json) => console.log(json));
}
export {saveCar};