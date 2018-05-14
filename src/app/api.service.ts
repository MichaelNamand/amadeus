import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

const API_URL = 'http://127.0.0.1:5000/';
@Injectable()
export class ApiService {
    headers = new Headers ({
        'Authorization' : ''
    });
constructor(private http: Http) {
    }

    public getArticles() {
        let data = {
            username: 'test1',
            password: 'test'
        };
        const options = new RequestOptions({ headers: this.headers});
        return this.http.get(API_URL + 'articles', options);
    }
}
