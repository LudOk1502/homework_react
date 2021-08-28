const url = 'https://jsonplaceholder.typicode.com/users';
const getUsers = () => {
    return fetch(url)
        .then(value => value.json())
}
const postUser = (user) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}
export {getUsers, postUser};