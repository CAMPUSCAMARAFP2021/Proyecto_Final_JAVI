const getTasks = async (jwt) => {
    const headers = new Headers();
    headers.append("Authorization", jwt);
    return fetch("http://localhost:3000/tasks", {headers})
    .then(res => res.json())
}

const createTask = async (task, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const body = JSON.stringify({task});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/tasks", requestOptions)
        .then(response => response.json());
}

const deleteTask = async (task, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch("http://localhost:3000/tasks/" + task._id, requestOptions)
        .then(response => response.text());
}

export {
    getTasks,
    createTask,
    deleteTask,
}