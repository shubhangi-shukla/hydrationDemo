import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class HomeApiService {

    constructor(private http: HttpClient) { }

    getDetails(name:string):
        Observable<any> {
        const url: string = "https://pokeapi.co/api/v2/pokemon/"+name
        const body = {};
        return this.http.get(url) as Observable<any>;
    }

}

