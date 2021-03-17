import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {CurrentGame, TicTacToeSign} from '../models/current-game.model';
import {Index} from '../models/tic-tac-toe-board.model';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {
  }

  getCurrentGame(): Observable<CurrentGame> {
    return this.http.get<CurrentGame>(`${environment.baseUrl}/game`);
  }

  markField(currentPlayer: TicTacToeSign, {row, col}: Index): Observable<CurrentGame> {
    const body = {
      row,
      column: col
    };
    const params = new HttpParams().set('player', currentPlayer);
    return this.http.post<CurrentGame>(`${environment.baseUrl}/game/field/mark`, body, {params}).pipe(
      catchError(err => throwError(err))
    );
  }

  reset(): Observable<CurrentGame> {
    return this.http.post<CurrentGame>(`${environment.baseUrl}/game/reset`, null);
  }
}
