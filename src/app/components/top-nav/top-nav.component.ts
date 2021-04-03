import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  Input,
} from '@angular/core';
import { ThemeService } from '../../theme/theme.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  @Input() isDarkTheme: boolean = false;
  constructor(public themeService: ThemeService) {}

  toggleTheme(): void {
    console.log('hi', !this.isDarkTheme);
    this.themeService.setDarkTheme(!this.isDarkTheme);
  }

  // navbar hide logic
  @ViewChild('topnav', { read: ElementRef }) topnav!: ElementRef;
  hideNavBar: boolean = false;
  currYOffset: number = 0;
  prevYOffset: number = 0;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    // this.hideNavBar = window.pageYOffset >= 250;
    this.currYOffset = window.pageYOffset;

    this.hideNavBar =
      this.prevYOffset < this.currYOffset &&
      this.currYOffset > 2 * this.topnav.nativeElement.offsetHeight;
    console.log(this.hideNavBar);

    this.prevYOffset = this.currYOffset;
  }

  @HostListener('mouseover', ['$event'])
  onEvent() {
    this.prevYOffset = window.pageYOffset;
    this.checkScroll();
  }
}
