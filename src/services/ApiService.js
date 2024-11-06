import { message } from 'antd';

export class ApiService {
    constructor(api, baseURL) {
        const gatewayURL = "http://localhost:8765";
        this.baseURL = gatewayURL + baseURL;
    }

    async request(endpoint, { method = 'GET', headers = {}, body = null } = {}) {
        const token = localStorage.getItem('token');

        const defaultHeaders = {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
            ...headers
        };

        const config = {
            method,
            headers: defaultHeaders,
        };

        if (body) {
            config.body = JSON.stringify(body);
        }

        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, config);

            if (!response.ok) {
                message.open({
                    type: 'error',
                    content: response.statusText,
                });
            }

            const data = await response.json();
            return data;

        } catch (error) {
            message.open({
                type: 'error',
                content: error.message || 'An unknown error occurred',
            });
        }
    }

    get(endpoint, headers = {}) {
        console.log(endpoint)
        return this.request(endpoint, { method: 'GET', headers });
    }

    post(endpoint, body, headers = {}) {
        return this.request(endpoint, { method: 'POST', headers, body });
    }

    put(endpoint, body, headers = {}) {
        return this.request(endpoint, { method: 'PUT', headers, body });
    }

    delete(endpoint, headers = {}) {
        return this.request(endpoint, { method: 'DELETE', headers });
    }
}
