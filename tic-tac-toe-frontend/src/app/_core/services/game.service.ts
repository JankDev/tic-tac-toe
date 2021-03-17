import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {CurrentGame} from '../models/current-game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {
  }

  getCurrentBoard(): Observable<CurrentGame> {
    return this.http.get<CurrentGame>(`${environment.baseUrl}/game`);
  }
}
