import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
    },
    {
      id: 11,
      name: 'namdxph16522',
      age: 20,
      email: 'dxnam1@gmail.com',
      avatar: "a",
      phone: "0337612"
    }
  
  ]
  formValues = 
    {
      id: 0,
      name: '',
      age: 0,
      email: '',
      avatar: "",
      phone: ""
    }
  
  onParentSubmit(formData: any) {
    console.log('avx', formData)
    const userIds = this.users.map(user => user.id).sort((a,b) => a - b)
    const newId = userIds[userIds.length - 1]
    if(this.formValues.id == 0) {
      this.users.push({
        ...formData,
        id: newId + 1
      })
    } else{
      const idx = this.users.findIndex((user) => user.id === this.formValues.id);
      if (idx > -1) {
        this.users[idx] = {
          ...formData,
          id: this.formValues.id
        };
    }
  }


}
onParentDelete(id: Number) {
  const confirm = window.confirm('ban co chac chan muon xoa khong')
  if(confirm){
    this.users = this.users.filter(user => user.id !== id)
  }

}
onParentEdit (userId: Number) {
  const editUser = this.users.find(user => user.id === userId)
  console.log(editUser);
  if(editUser){
    return this.formValues = {...editUser}
    
    
  }
  return alert('k tim thay  ')
}
}
