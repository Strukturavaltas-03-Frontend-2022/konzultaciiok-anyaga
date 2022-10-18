// {"id":1,"name":"Cad Bedford","email":"cbedford0@symantec.com","category":"Guest"}
interface IUser {
    id: number;
    name: string;
    email: string;
    category: string;
}

// {"id":1,"title":"Blind","year":2006,"category":"Action","active":true}
interface IMovie {
    id: number;
    title: string;
    year: number;
    category: string;
    active: boolean;
}

class BaseService<T extends {id: number}> {
    apiUrl: string = '';

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    async getAll(): Promise<T[]> {
        const response = await fetch(this.apiUrl);
        return response.json() as Promise<T[]>;
    }

    async get(id: number): Promise<T> {
        const response = await fetch(`${this.apiUrl}/${id}`);
        return response.json() as Promise<T>;
    }
    
    async create(entity: T): Promise<T> {
        const response = await fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(entity),
        });
        return response.json() as Promise<T>;
    }
    
    async update(entity: T): Promise<T> {
        const response = await fetch(`${this.apiUrl}/${entity.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(entity),
        });
        return response.json() as Promise<T>;
    }

    async remove(id: number): Promise<T> {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'DELETE'
        });
        return response.json() as Promise<T>;
    }
    
}

class UserService extends BaseService<IUser> {
    constructor(apiUrl: string) {
        super(apiUrl);
    }
}

class MovieService extends BaseService<IMovie> {
    constructor(apiUrl: string) {
        super(apiUrl);
    }
}

const userService: UserService = new UserService('https://nettuts.hu/jms/joe/users');
const movieService: MovieService = new MovieService('https://nettuts.hu/jms/joe/movies');

userService.getAll().then(
    r => console.log(r),
);
movieService.getAll().then(
    r => console.log(r),
);
