import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  form: FormGroup;
  formCOntrol: FormControl

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      address: new FormGroup({}),
      personal_info: new FormGroup({})
    });
  }

  onSubmit() {
    console.log(this.form.value);
    console.log(this.form);
  }

}
