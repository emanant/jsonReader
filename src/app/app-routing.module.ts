import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { JsonViewerComponent } from './components/json-viewer/json-viewer.component';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'upload', component: UploadPageComponent, canActivate: [AuthGuard] },
  { path: 'view', component: JsonViewerComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
