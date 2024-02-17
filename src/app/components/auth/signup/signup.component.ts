import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User ={
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    passwordConfirm:"",
  }
    signupForm: FormGroup;

    firstname:FormControl;
    lastname:FormControl;
    email:FormControl;
    password:FormControl;
    passwordConfirm:FormControl;


  /* section 16
  firstname: string= ""
  names: string[] = ["Paul"]
  i:number=0
*/

  constructor(private fb: FormBuilder) {
    this.firstname= fb.control("",[Validators.required])
    this.lastname= fb.control("",[Validators.required])
    this.email= fb.control("",[Validators.email,Validators.required])
    this.password= fb.control("",[Validators.required, Validators.minLength(6)])
    this.passwordConfirm= fb.control("",[Validators.required])

    this.signupForm = fb.group({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm
   })
  }

  ngOnInit(): void {
  }

  handleSubmit(){
    console.log("User : ",this.user);

  }





// section 16
 /*handleSave(){
  if (this.firstname){
    if (this.i){
      let name=this.firstname
      this.names.splice(this.i,0,name)
      this.firstname=""
    }else {
    this.names.push(this.firstname)
    this.firstname=""
  }}
 }


 handleDelete(index: number){
  if(index >=0){
    this.names.splice(index,1)
  }
 }

 handleUpdate(index: number){
  if(index >=0){
    this.i=index
    const name=this.names[index]

    this.names.splice(index,1)
    this.firstname= name

  }

 }*/


}
