import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as crypto from 'crypto-js';

interface User {
  fullName: string;
  mobileNumber: string;
  emailId: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  users: User[] = [];

  constructor(private toastr: ToastrService) {}

  registerSubmit(form: NgForm) {
    if (form.valid) {
      const { fullName, mobileNumber, emailId, password, confirmPassword } = form.value;

      if (password !== confirmPassword) {
        this.toastr.error('Passwords do not match!');
        return;
      }

      const isUniqueFullName = !this.users.some(user => user.fullName === fullName);
      const isUniqueMobileNumber = !this.users.some(user => user.mobileNumber === mobileNumber);
      const isUniqueEmailId = !this.users.some(user => user.emailId === emailId);
      const isUniquePassword = !this.users.some(user => user.password === this.encryptPassword(password));

      if (isUniqueFullName && isUniqueMobileNumber && isUniqueEmailId && isUniquePassword) {
        const encryptedPassword = this.encryptPassword(password);

        const newUser = { fullName, mobileNumber, emailId, password: encryptedPassword };
        this.users.push(newUser);
        this.toastr.success('Registration successful!');

        console.log('Registered User:', newUser);

        form.reset();
      } else {
        this.toastr.error('Full name, mobile number, email ID, or password already exists!');
      }
    }
  }

  encryptPassword(password: string): string {
    return crypto.SHA256(password).toString();
  }
}
