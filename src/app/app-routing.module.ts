import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HaderComponent } from './hader/hader.component';
import { FeedsComponent } from './feeds/feeds.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'hader', 
  component:HaderComponent,
},

{path:'feeds', 
component:FeedsComponent,
},

{path:'register', 
component:RegisterComponent,
children:[{
path:'Sign in',
component:SignInComponent

}]
},
{path:'sign-in', 
component:SignInComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
