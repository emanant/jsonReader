import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public isLoggedIn: boolean = false;
  constructor(
    private auth: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.user$.pipe(
      take(1),
      map((user) => !!user),
      tap((loggedIn) => {
        if (!loggedIn) {
          console.log('Access Denied. Please Login');
          this.openSnackBar('Please Login');
          // window.alert("Access Denied. Please Login")
          this.router.navigate(['/']);
        } else {
          console.log('Access Granted. Logged in');
        }
      })
    );
  }

  openSnackBar(message: string, action: string = 'Error') {
    this._snackBar.open(message, action, {
      duration: 1000,
    });
  }
}
