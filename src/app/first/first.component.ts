import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('ts@gmail.com')
  });

  constructor() {
  }

  ngOnInit() {
    this.form.get('email').valueChanges.subscribe((value) => console.log(value));
    console.log(this.form.get('email').validator);
  }

  onSubmit(f) {
    console.log(f);
  }

}
