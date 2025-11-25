import { Routes } from '@angular/router';
import { Principal } from './pages/principal/principal';
import { Stock } from './pages/principal/stock/stock';
import { Equipement } from './pages/principal/stock/equipement/equipement';
import { Consommable } from './pages/principal/stock/consommable/consommable';
import { Login } from './pages/login/login';
import { Messages } from './pages/principal/messages/messages';
import { Projects } from './pages/principal/projects/projects';
import { Passages } from './pages/principal/passages/passages';
import { authGuard } from './guards/auth-guard';
import { PersonnalMessages } from './pages/principal/messages/personnal-messages/personnal-messages';
import { GroupMessages } from './pages/principal/messages/group-messages/group-messages';

export const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'main', component:Principal, canActivate:[authGuard] ,children:[
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
        path:'messages', component:Messages, children:[
          {
            path:'', redirectTo:'personnalMessages', pathMatch:'full'
          },
          {
            path:'personnalMessages', component:PersonnalMessages
          },
          {
            path:'groupedMessages', component:GroupMessages
          }
        ]
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
