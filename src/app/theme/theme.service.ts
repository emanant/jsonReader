import { Injectable, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _darkTheme = new BehaviorSubject<boolean>(true);
  isDarkTheme = this._darkTheme.asObservable();

  constructor() {}

  setDarkTheme(isDarkTheme: boolean): void {
    this._darkTheme.next(isDarkTheme);
  }
}
