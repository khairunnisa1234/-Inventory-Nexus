import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private toastr: ToastrService) {}

  loginSubmit(form: NgForm) {
    if (form.valid) {
      const { emailId, password } = form.value;
      const correctUsername = 'THARUN'; 
      const correctPassword = 'PROJECT'; 

      if (emailId === correctUsername && password === correctPassword) {
        this.toastr.success('Login successful!');
      } else {
        this.toastr.error('Invalid credentials!');
      }
    }
  }
}
