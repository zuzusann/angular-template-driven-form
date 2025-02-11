import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  genders =['male','female','other'];
  countries =['America','Japan','India','Nepal'];
  hobbies =['Reading','Writing'];

  hobbyselect: { [select: string]: boolean } = {};

    user :User ={
    firstName: '',
    lastName : '',
    dob : '',
    phone : '',
    emailAddress : '',
    gender : '',
    street1 : '',
    street2 : '',
    country : '',
    city : '',
    region : '',
    postal : '',
    isAgreed: false,
    password : '',
    username:'',
    hobbies:[]
   }

   // @ViewChild('registrationForm') form: NgForm;

    constructor(private userServie: UserService){

    }
    
    hobbiesSelections(event: Event, hobby: string): void { 
      const target = event.target as HTMLInputElement; 
      const isChecked = target?.checked; 
   
      if (isChecked) { 
        if (!this.user.hobbies.includes(hobby)) { 
          this.user.hobbies.push(hobby); 
        } 
        else { 
          this.user.hobbies = this.user.hobbies.filter(h => h !== hobby); 
        } 
      } 
    }

    onFormSubmitted(form: NgForm){
      if(form.valid){
           this.userServie.addUser(this.user).subscribe(() => { form.reset()});   
           alert('Ya p');
        }
      else{
          alert('Form is invalid');
        }


    }
}
