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
    }
   
  ]
  onParentSubmit(formData: any) {
    console.log('avx', formData)
  }


}
