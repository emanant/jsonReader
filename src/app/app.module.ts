import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { JsonViewerComponent } from './components/json-viewer/json-viewer.component';
import { DropzoneDirective } from './components/upload-page/dropzone.directive';
import { UploadTaskComponent } from './components/upload-page/upload-task/upload-task.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AceEditorModule } from '@postfinance/ngx-ace-editor-wrapper';
import { NgxGraphModule } from '@swimlane/ngx-graph';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SidenavComponent,
    UploadPageComponent,
    HomePageComponent,
    JsonViewerComponent,
    DropzoneDirective,
    UploadTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,

    // firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage

    NgxJsonViewerModule,
    AceEditorModule,
    NgxGraphModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
