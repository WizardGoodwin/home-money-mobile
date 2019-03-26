import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  form: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(
        null,
        [Validators.required, Validators.email],
      ),
      'password': new FormControl(
        null,
        [Validators.required, Validators.minLength(6)]
      ),
      'name': new FormControl(
        null, [Validators.required]
      ),
      'agree': new FormControl(
        false, [Validators.requiredTrue]
      ),
    });
  }

  onSubmit() {
    const formData = this.form.value;
    console.log(formData);
  }
}
