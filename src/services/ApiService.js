class ApiService {
    constructor(baseURL, token = null) {
        this.baseURL = baseURL;
        this.token = token;
    }

    async request(endpoint, {method = 'GET', headers = {}, body = null} = {}) {
        const defaultHeaders = {
            'Content-Type': 'application/json',
            ...(this.token ? {'Authorization': `Bearer ${this.token}`} : {}),
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
                throw new Error(`Erro: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error(`Erro na requisição ${method} ${endpoint}:`, error);
            throw error; // Rethrow para permitir captura em outros locais
        }
    }

    get(endpoint, headers = {}) {
        return this.request(endpoint, {method: 'GET', headers});
    }

    post(endpoint, body, headers = {}) {
        return this.request(endpoint, {method: 'POST', headers, body});
    }

    put(endpoint, body, headers = {}) {
        return this.request(endpoint, {method: 'PUT', headers, body});
    }

    delete(endpoint, headers = {}) {
        return this.request(endpoint, {method: 'DELETE', headers});
    }
}
