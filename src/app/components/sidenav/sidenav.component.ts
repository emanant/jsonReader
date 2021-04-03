import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent implements OnInit {
  @Input() isDarkTheme: boolean = false;
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
  showFiller = false;
}
