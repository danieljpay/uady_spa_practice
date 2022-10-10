import { Injectable } from "@angular/core";
import { BusquedaInt } from "../interfaces/BusquedaInt";
import { HttpClient } from "@angular/common/http";
import { SubscribableOrPromise } from 'rxjs';
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BusquedaServicio {
  private URL = "https://api.github.com/search/users?q=";

  cachedValues: Array<{ [query: string]: BusquedaInt }> = [];

  constructor(private http: HttpClient) {this.http = http;}

  buscar = (query: string): Promise< BusquedaInt > => {
    let promise = new Promise<BusquedaInt>((resolve, reject) => {
        if (this.cachedValues[query]) {
            resolve(this.cachedValues[query])
        } else {
            this.http.get('https://api.github.com/search/repositories?q=' + query)
            .toPromise()
            .then( (response) => {
                resolve(response as BusquedaInt)
            }, (error) => {
                reject(error);
            })
        }
    })
    return promise;
  }

  public getData(parameter:string): Observable<BusquedaInt> {
    return this.http.get<BusquedaInt>(this.URL + parameter);
  }

}
