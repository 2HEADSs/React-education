const baseUrl = 'http://localhost:3005/api';


export const getAll = async()=>{
    const response = await fetch(`${baseUrl}/users`);
    const result = await response.json();
    console.log(result);
     
    return result.users 
}