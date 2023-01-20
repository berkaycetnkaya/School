import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.show();
  }
  @ViewChild('myModal') private modalPopUp: ModalDirective;


  show(){
    this.modalPopUp.show();

  }
  close(){
    this.modalPopUp.hide();
  }
}
