import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private usersService: UsersService
  ) { }

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
    const { email, password, name } = this.form.value;
    const user = new User(email, password, name);

    this.usersService.createNewUser(user)
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }
}
