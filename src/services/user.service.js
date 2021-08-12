const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/').then(value => value.json())
}
export {getUsers};