const getBdwinners = async (jwt) => {
    const headers = new Headers();
    headers.append("Authorization", jwt);
    return fetch("http://localhost:3000/bdwinners", {headers})
    .then(res => res.json())
}

const createBdwinner = async (bdwinner, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const body = JSON.stringify({bdwinner});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/bdwinners", requestOptions)
        .then(response => response.json());
}

const deleteBdwinner = async (bdwinner, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch("http://localhost:3000/bdwinners/" + bdwinner._id, requestOptions)
        .then(response => response.text());
}

export {
    getBdwinners,
    createBdwinner,
    deleteBdwinner,
}