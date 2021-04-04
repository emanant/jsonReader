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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
  MatExpansionModule,
  MatCheckboxModule,
];

@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule {}
