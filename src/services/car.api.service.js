const url = 'http://91.201.233.14/api/v1/cars';

const getCars = () => {
    return fetch(url)
        .then(value => value.json())
}
const saveCar = (car) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        }
    }).then(response => response.json());
};
const getChosenCar = (id) => {
    return fetch(url + '/' + id)
        .then((value) => value.json())
};

const updateCar = (id, car) => {
    return fetch(url + '/' + id, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
};

export {getCars, saveCar, getChosenCar, updateCar};
