import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const BASE_URI: string = "http://localhost:6800/evaluate?equation="


@Injectable({
  providedIn: 'root'
})
export class APIServices {

    constructor(private httpClient: HttpClient) { }

    evaluate(equation: string): Observable<any> {
        return this.httpClient.get<any>(BASE_URI + encodeURIComponent(equation));
    }

}