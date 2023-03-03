const baseUrl = 'http://localhost:3005/api';


export const getAll = async () => {
    const response = await fetch(`${baseUrl}/users`);
    const result = await response.json();

    return result.users
}


export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    const result = await response.json();

    return result.user
}

export const create = async (userData) => {
    const response = await fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData)
    });
    const result = await response.json();

    console.log(result);

    return result
}