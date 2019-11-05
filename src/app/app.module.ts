import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgDragDropModule } from 'ng-drag-drop';
import { DemoMaterialModule } from './material-module';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { ModalBoxComponent } from './components/modal-box/modal-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PublishComponent } from './components/publish/publish.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalBoxComponent,
    PublishComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgDragDropModule.forRoot(),
    FormsModule,
    DemoMaterialModule,
    DragAndDropModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ModalBoxComponent]
})
export class AppModule { }
