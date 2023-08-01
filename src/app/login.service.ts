// // import { Injectable} from '@angular/core';
// // import { HttpClient} from '@angular/common/http';
// // import { User } from './user';
// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class LoginService {
// //   login(email: string, password: string) {
// //     throw new Error('Method not implemented.');
// //   }
// //   private baseURL = "http://localhost:3000";
// //   constructor(private http: HttpClient) { }

// // registerUser(usr:User){
// //   console.log(usr);
// //   // return this.http.post<User>(this.baseURL+'register',usr);
// //   this.http.post<User>(`${this.baseURL}/register`,usr).subscribe(res=>{
// //     console.log(res,"RES");
// //   })

  
// // }
  
// // // loginUser(body:any){
// // //   // console.log(`${this.url}/submit-form`);
// // //   // this.httpClient.post(`${this.url}/submit-form`,body).subscribe(res=>{
// // //   //   console.log(res,"RES");
    
// // //   // })
// // //  }


// // }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';



// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   private apiUrl = "http://localhost:3000";

//   constructor(private http: HttpClient) { }
// }


//original

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {
 

//   apiUrl = 'http://localhost:3000';

//   constructor(private http: HttpClient) { }

//   registerUser(name: string, email: string, password: string): Observable<any> {
//     const userData = {
//       name: name,
//       email: email,
//       password: password
//     };
//     return this.http.post(`${this.apiUrl}/register`, userData);
//   }


//   login(email: string, password: string): Observable<any> {
//     const userData = {
//       email: email,
//       password: password
//     };
//     return this.http.post(`${this.apiUrl}/login`, userData);
//   }
  

// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  saveBookingData(bookingData: { numRooms: any; numPersons: any; roomChoice: any; checkInDate: Date; checkOutDate: Date; totalCost: number; }) {
    throw new Error('Method not implemented.');
  }
 
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  registerUser(name: string, email: string, password: string): Observable<any> {
    const userData = {
      name: name,
      email: email,
      password: password
    };
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  loginUser(email: string, password: string): Observable<any> {
    const userData = {
      email: email,
      password: password
    };
    return this.http.post(`${this.apiUrl}/login`, userData);
  }


  // bookHotel(numRooms: number,numPersons: number,roomChoice: string,checkInDate: Date,checkOutDate: Date,totalCost: number,): Observable<any> {
  //   const Booking = {
  //     numRooms: number,
  //     numPersons: number,
  //     roomChoice: string,
  //     checkInDate: Date,
  //     checkOutDate: Date,
  //     totalCost: number
  //   }


  //   return this.http.post(`${this.apiUrl}/book`, Booking);
  // }

  // bookHotel(numRooms: number, numPersons: number, roomChoice: string, checkInDate: Date, checkOutDate: Date, totalCost: number): Observable<any> {
  //   const bookingData = {
  //     numRooms: numRooms,
  //     numPersons: numPersons,
  //     roomChoice: roomChoice,
  //     checkInDate: checkInDate,
  //     checkOutDate: checkOutDate,
  //     totalCost: totalCost
  //   };
  
  //   return this.http.post(`${this.apiUrl}/book`, bookingData);
  // }
  
}


