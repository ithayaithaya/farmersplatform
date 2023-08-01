// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { LoginService } from '../login.service';


// @Component({
//   selector: 'app-reg',
//   templateUrl: './reg.component.html',
//   styleUrls: ['./reg.component.css']
// })
// export class RegComponent implements OnInit {

//   constructor( private loginservice : LoginService) { 

//   }

//   registrationForm = new FormGroup({
//     name: new FormControl('', Validators.required),
//     email: new FormControl('', [Validators.required, Validators.email]),
//     password: new FormControl('', Validators.required),
//     confirmPassword: new FormControl('', Validators.required)
//   });

//   get name() { return this.registrationForm.get('name'); }
//   get email() { return this.registrationForm.get('email'); }
//   get password() { return this.registrationForm.get('password'); }
//   get confirmPassword() { return this.registrationForm.get('confirmPassword'); }

//   passwordMatchValidator() {
//     const passwordControl = this.registrationForm.get('password');
//     const confirmPasswordControl = this.registrationForm.get('confirmPassword');
//     if (passwordControl && confirmPasswordControl) {
//       return passwordControl.value === confirmPasswordControl.value
//         ? null
//         : { 'mismatch': true };
//     }
//     return null;
//   }

//   ngOnInit(): void {
   
//   }
//   onSubmit() {
//     console.log(this.registrationForm.value);
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { LoginService } from '../login.service';


// @Component({
//     selector: 'app-reg',
//     templateUrl: './reg.component.html',
//     styleUrls: ['./reg.component.css']
//   })
//   export class RegComponent implements OnInit {

//   registrationForm!: FormGroup;
//   errorMessage!: string;

//   constructor( private loginservice : LoginService) { 

//       }

//   ngOnInit() {
//     this.registrationForm = new FormGroup({
//       'name': new FormControl(null, Validators.required),
//       'email': new FormControl(null, [Validators.required, Validators.email]),
//       'password': new FormControl(null, Validators.required),
//       'confirmPassword': new FormControl(null, Validators.required)
//     });
//   }

//   onSubmit() {
//     const name = this.registrationForm.value.name;
//     const email = this.registrationForm.get('email')?.value ?? '';
//     const password = this.registrationForm.value.password;
//     const confirmPassword = this.registrationForm.value.confirmPassword;

//     if (password !== confirmPassword) {
//       this.errorMessage = "Passwords do not match.";
//       return;
//     }

//     this.loginservice.registerUser(name, email, password).subscribe({
//       next: (response) => {
//         console.log(response);
//       },
//       error: (err) => {
       
//         console.log(err);
//         this.errorMessage = err.message;
//       },
//       complete: () => {
//         // handle the completion
//       }
//     });
    
   


//   }

// }




import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  errorMessage: string = '';

  constructor(private loginservice: LoginService) { }

  registrationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  get name() { return this.registrationForm.get('name'); }
  get email() { return this.registrationForm.get('email'); }
  get password() { return this.registrationForm.get('password'); }
  get confirmPassword() { return this.registrationForm.get('confirmPassword'); }

  passwordMatchValidator() {
    const passwordControl = this.registrationForm.get('password');
    const confirmPasswordControl = this.registrationForm.get('confirmPassword');
    if (passwordControl && confirmPasswordControl) {
      return passwordControl.value === confirmPasswordControl.value
        ? null
        : { 'mismatch': true };
    }
    return null;
  }

  ngOnInit(): void { }

  onSubmit() {
    // const name = this.registrationForm.value.name;
    const name = this.registrationForm.value.name ?? '';

    const email = this.registrationForm.get('email')?.value ?? '';
    // const password = this.registrationForm.value.password;
    const password = this.registrationForm.value.password ?? '';

    const confirmPassword = this.registrationForm.value.confirmPassword;

    if (password !== confirmPassword) {
      this.errorMessage = "Passwords do not match.";
      return;
    }

    this.loginservice.registerUser(name, email, password).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = err.message;
      },
      complete: () => {
        // handle the completion
      }
    });
  }
}
