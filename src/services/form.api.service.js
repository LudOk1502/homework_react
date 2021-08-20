const url = 'http://195.72.146.25/api/v1/cars';

const saveCar = (car) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        }
    }).then(response => response.json()).then((json) => console.log(json));
};

const deleteCarAPI = (id) => {
    fetch(url + '/' + id, {
        method: 'DELETE',
    });
};

const updateCarAPI = (car) => {
    fetch(url + '/' + car.id, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
};

const getCars = () => {
    return fetch(url)
        .then(value => value.json())
};

const getChosenCar = (id) => {
    return fetch(url + '/' + id)
        .then((value) => value.json())
};
export {saveCar, deleteCarAPI, updateCarAPI, getChosenCar, getCars};