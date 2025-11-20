import { Routes } from '@angular/router';
import { Principal } from './pages/principal/principal';
import { Stock } from './pages/principal/stock/stock';
import { Equipement } from './pages/principal/stock/equipement/equipement';
import { Consommable } from './pages/principal/stock/consommable/consommable';
import { Login } from './pages/login/login';
import { Messages } from './pages/principal/messages/messages';
import { Projects } from './pages/principal/projects/projects';
import { Passages } from './pages/principal/passages/passages';

export const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'main', component:Principal, children:[
      {
        path:'', redirectTo:'stock', pathMatch:'full' 
      },
      {
        path:'stock', component:Stock, children:[
          {
            path:'', redirectTo:'equipement', pathMatch:'full'
          },
          {
            path:'equipement', component:Equipement
          },
          {
            path:'consommable', component:Consommable
          }
        ]
      },
      {
        path:'messages', component:Messages
      },
      {
        path:'projects', component:Projects
      },
      {
        path:'passages', component:Passages
      }
    ]
  },
  {
    path:'login', component:Login
  }

];
