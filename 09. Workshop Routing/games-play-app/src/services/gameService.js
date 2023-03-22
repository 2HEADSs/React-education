import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/games';

export const gameServiceFactory = (token) => {
    const request = requestFactory(token);
    
    const getAll = async () => {
        const result = await request.get(baseUrl);
        const games = Object.values(result)
        return games;
    };


    const getOne = async (gameId) => {
        const result = await request.get(`${baseUrl}/${gameId}`);
        return result;
    };

    const create = async (gameData) => {
        const result = await request.post(baseUrl, gameData);
        return result
    };


    const addComment = async (gameId, data) => {
        const result = await request.post(`${baseUrl}/${gameId}/comments`, data);
        return result;
    };

    return {
        getAll,
        getOne,
        create,
        addComment
    }
};