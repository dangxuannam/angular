import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
@Output() handleSubmit: EventEmitter<any> 
  constructor() { 
    this.handleSubmit = new EventEmitter()
  }
  inputValues = {
    id: '',
    name: 'dx nam',
    age: 0,
    email: '',
    image: "a",
    phone: "033"
  }

  ngOnInit(): void {
  }
  onSubmit(userForm: NgForm){
      this.handleSubmit.emit(userForm.value);
  userForm.resetForm({
    name: '',
    age: 0,
    email: ''
  })
 }

}
