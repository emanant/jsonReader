import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  themeSubscription!: Subscription;
  isDarkTheme: Observable<boolean>;
  useDarkTheme: boolean = false;

  constructor(private themeService: ThemeService) {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  ngOnInit() {
    this.themeSubscription = this.isDarkTheme.subscribe(
      (value) => (this.useDarkTheme = value)
    );
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  title = 'jsonReader';
}
