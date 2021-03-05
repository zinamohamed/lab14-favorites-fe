import request from 'superagent';


const URL = 'https://pure-springs-08650.herokuapp.com';

export async function signUpUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ email, password })

    return response.body;
}

export async function loginUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signin`)
        .send({ email, password })

    return response.body;
}


export async function getProducts(token) {
    const response = await request
        .get(`${URL}/api/lipsticks`)
        .set('Authorization', token)

    return response.body;
}

export async function addFavorite(product, token) {
    const response = await request
        .post(`${URL}/api/favorites`)
        .set('Authorization', token)
        .send(product)

    return response.body;
}

export async function getFavorites(token) {
    const response = await request
        .get(`${URL}/api/favorites`)
        .set('Authorization', token);

    return response.body;
}