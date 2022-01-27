import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

export default class Data {

    /* === CLASS METHODS === */

    api(path, method = 'GET', data = null, requiresAuth = false, credentials = null) {
        const url = path;
        
        const options = {
            method, // since the name and value are the same it can be one
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        };

        if (data !== null) {
            options.data = JSON.stringify(data);
        }

        if (requiresAuth) {
            const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);
            options.headers['Authorization'] = `Basic ${encodedCredentials}`;
        }

        return axios(url, options);
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

    async createCourse(course) {
        const response = await this.api('/courses', 'POST', course, false, null);
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