export class JsonService {
    constructor(apiUrl = '') {
        this.apiUrl = apiUrl;
    }

    async getAll() {
        const response = await fetch(this.apiUrl);
        return response.json();
    }

    async get(id = 0) {
        const response = await fetch( `${this.apiUrl}/${id}` );
        return response.json();
    }

    async remove(id = 0) {
        const response = await fetch( `${this.apiUrl}/${id}`, {
            method: 'DELETE'
        } );
        return response.json();
    }

};