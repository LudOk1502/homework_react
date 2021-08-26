const url = 'http://91.201.233.14/api/v1/cars';

const saveCar = (car) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        }
    }).then(response => response.json());
};

const deleteCarAPI = (id) => {
    fetch(url + '/' + id, {
        method: 'DELETE',
    });
};

const updateCarAPI = (id, car) => {
    return fetch(url + '/' + id, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
};

const getCars = () => {
    return fetch(url)
        .then(value => value.json())
};

export {saveCar, deleteCarAPI, updateCarAPI, getCars};