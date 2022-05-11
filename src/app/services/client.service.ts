import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Response} from "../types/response.types";

@Injectable({
    providedIn: 'root'
})
export class ClientService{
    private url = 'http://ergast.com/api/f1/';
    constructor(
        private httpClient: HttpClient
    ) {
    }
    get<T>(path: string): Observable<Response<T>> {
        return this.httpClient.request<Response<T>>('GET', `${this.url}${path}`);
    }
}
