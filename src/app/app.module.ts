import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LessonComponent } from './component/lesson/lesson.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { LessonChildComponent } from "./component/lessonChild/lessonChild.component";
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LessonComponent,
        LessonChildComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ToastrModule.forRoot({
            positionClass: "toast-bottom-right"
        }),
        BrowserAnimationsModule,
        ModalModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,

    ]
})
export class AppModule { }
