import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
      path: 'user',
      component: UserFormComponent
    }
   
    
    ]
  },
  {
    path: 'admin',
    component :AdminLayoutComponent,
    children : [
      {
        path : '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path : 'users',
        component : UserComponent
      }
    ]
  }
  
   

    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
