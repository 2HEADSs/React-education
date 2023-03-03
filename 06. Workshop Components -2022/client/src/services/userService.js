const baseUrl = 'http://localhost:3005/api';


export const getAll = async()=>{
    const response = await fetch(`${baseUrl}/users`);
    const result = await response.json();
     
    return result.users 
}


export const getOne = async(userId)=>{
    const response = await fetch(`${baseUrl}/users/${userId}`);
    const result = await response.json();
     
    return result.user
}