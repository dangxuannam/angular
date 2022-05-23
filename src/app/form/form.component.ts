import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  users = [
    {
      id: 1,
      name: 'namdxph16521',
      age: 20,
      email: 'dxnam@gmail.com',
      avatar: "a",
      phone: "0337612"
    },
    {
      id: 10,
      name: 'namdxph16522',
      age: 20,
      email: 'dxnam1@gmail.com',
      avatar: "a",
      phone: "0337612"
    }
   
  ]
  
  constructor() { }
  inputValues = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    avatar: "",
    phone: ""
  }
  ngOnInit(): void {
  }
  
 
 onSubmit(userForm: NgForm){
// console.log(formData)
// tim id lon nhat
  const userIds = this.users
  .map(user => user.id) // lấy ra mảng mới chỉ có id
  .sort((a, b) => a- b) // sort các id đang có  
  // console.log(userIds)
     // 1. Push dữ liệu mới nhận từ form vào mảng
  const  newId = userIds[userIds.length-1]
  
  if(userForm.value.id == 0){
    this.users.push ({
      ...userForm.value, // lấy ra object value của form
      id: newId +  1
    })
  } else{
    const idx = this.users.findIndex((user) => user.id === this.inputValues.id);
    if (idx > -1) {
      this.users[idx] = {
        ...userForm.value,
        id: this.inputValues.id
     }
      
    }
  }
  
  userForm.resetForm({
    name: '',
    age: 0,
    email: ''
  })
 }
 onDelete(userIds: number) {
  const confirm = window.confirm('ban co chac muon xoa không')
  
  if(confirm) {
 this.users = this.users.filter(user => user.id !== userIds)

  // console.log(a);
  }
  
  
}
onEdit(userIds: number) {
  // 1. Tìm ra user có id là userId truyền vào
  const editUser = this.users.find((user) => user.id === userIds);
  console.log(editUser);
  // 2. Nếu tìm ra thì mới gán giá trị lên form
  if (editUser) {
    this.inputValues = {...editUser};
  }
}
}

