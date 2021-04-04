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
  private timer;

  constructor(public themeService: ThemeService) {}

  toggleTheme(): void {
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
    // window.clearTimeout(this.timer);
    // this.onMouseOut();
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver() {
    this.prevYOffset = window.pageYOffset;
    this.checkScroll();
  }

  // @HostListener('onmouseout', ['$event'])
  // onMouseOut() {
  //   this.timer = setTimeout(() => {
  //     this.prevYOffset = window.pageYOffset;
  //     this.checkScroll();
  //   }, 3000);
  // }
}
