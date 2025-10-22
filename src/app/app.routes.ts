import { Routes } from '@angular/router';
import { Principal } from './pages/principal/principal';
import { Stock } from './pages/principal/stock/stock';
import { Equipement } from './pages/principal/stock/equipement/equipement';
import { Consommable } from './pages/principal/stock/consommable/consommable';

export const routes: Routes = [
  {
    path:'', component:Principal, children:[
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
      }
    ]
  }
];
