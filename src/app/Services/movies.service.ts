import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) { }//give access to local instance of httpClient
  GetMovieData():Observable<any>{
    return this.httpClient.get('https://www.omdbapi.com/?apikey=61e39c9c&s=%27war%27');
  }
}
