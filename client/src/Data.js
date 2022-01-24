import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

export default class Data {

    /* === CLASS METHODS === */

    api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
        const url = path;
        
        const config = {
            method, // since the name and value are the same it can be one
            url,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        };

        if (body !== null) {
            config.body = JSON.stringify(body);
        }

        if (requiresAuth) {
            const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);
            config.headers['Authorization'] = `Basic ${encodedCredentials}`;
        }

        return axios(path, config);
    }

    async getUser(username, password) {
        const response = await this.api('/users', 'GET', null, true, { username, password });
        if (response.status === 200) {
            return response.json().then(data => data);
        } else if (response.status === 401) {
            return null;
        } else {
            throw new Error();
        }
    }

    async createUser(user) {
        const response = await this.api('/users', 'POST', user);
        if (response.status === 201) {
            return [];
        } else if (response.status === 400) {
            return response.json().then(data => {
                return data.errors;
            });
        } else {
            throw new Error();
        }
    }

}