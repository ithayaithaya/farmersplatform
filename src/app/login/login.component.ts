
// import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { LoginService } from '../login.service';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   errorMessage: any;

// constructor(private loginService : LoginService){

// }

//   loginForm = new FormGroup({
//     email: new FormControl('', [Validators.required, Validators.email]),
//     password: new FormControl('', Validators.required)
//   });

//   get email() { return this.loginForm.get('email'); }
//   get password() { return this.loginForm.get('password'); }

//   onSubmit() {
//     const email = this.loginForm.get('email')?.value ?? '';
//     const password = this.loginForm.value.password ?? '';
  
//     this.loginService.login(email, password).subscribe({
//       next: (response) => {
//         console.log(response);
//         // Store the user data in local storage or a cookie
//         // Redirect to the home page or the user's dashboard
//         alert("loginsuccessfully")
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
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string = '';

  constructor(private loginService : LoginService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    const email = this.loginForm.get('email')?.value ?? '';
    const password = this.loginForm.value.password ?? '';

    this.loginService.loginUser(email, password).subscribe({
      next: (response) => {
        console.log(response);
        alert("login successfully");
        this.router.navigate(['/userdashboard']);
        // handle successful login
      },
      error: (err) => {
        alert("check your email or password");
        console.log(err);
        this.errorMessage = err.message;
        // handle login error
      },
      complete: () => {
        // handle completion
      }
    });
  }

}
