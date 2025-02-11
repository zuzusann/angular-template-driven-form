import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  onLoginFormSubmitted(form: NgForm) {
    if (form.valid) {
      // Perform login logic here, such as sending data to an API
      console.log('Login form submitted:', form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
