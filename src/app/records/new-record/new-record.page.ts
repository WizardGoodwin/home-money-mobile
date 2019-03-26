import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.page.html',
  styleUrls: ['./new-record.page.scss'],
})
export class NewRecordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
