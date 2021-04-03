import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

const Material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatIconModule,
  MatTooltipModule,
  MatCardModule,
  MatDividerModule,
];

@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule {}
