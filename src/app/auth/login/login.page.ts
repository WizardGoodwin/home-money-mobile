import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/users.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(
        null,
        [Validators.required, Validators.email]
      ),
      'password': new FormControl(
        null,
        [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    const formData = this.form.value;

    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.router.navigate(['/bill']);
          } else {
            // this.showMessage({
            //   text: 'Пароль не верный',
            //   type: 'danger'
            // });
          }
        } else {
          // this.showMessage({
          //   text: 'такого пользователя не существует',
          //   type: 'danger'
          // });
        }
      });
  }
}
