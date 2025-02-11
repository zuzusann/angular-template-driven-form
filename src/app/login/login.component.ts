import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private userService: UserService, private router: Router) { }

  onLoginFormSubmitted(form: NgForm) {
    if (form.valid) {
      this.userService.getUsers().subscribe(users => {
        const validUser = users.find(
          (user: any) => user.username === form.value.username && user.password === form.value.password
        );
        if (validUser) {
          this.router.navigate(['/home']);
          alert('Login successful:');
        } else {
          alert('Invalid credentials');
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
