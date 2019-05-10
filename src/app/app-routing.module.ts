import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './marketing/dashboard/dashboard.component';
import { LeadsComponent } from './dashboard/leads/leads.component';
import { OperationsDashboardComponent } from './operation/operations-dashboard/operations-dashboard.component';
import { AccountsComponentComponent } from './accounts/accounts-component/accounts-component.component';
const routes: Routes = [

  {path: '', component:HomeComponent },
  {path: 'marketing', component: DashboardComponent},
  {path: 'operation', component: OperationsDashboardComponent},
  {path: 'leads', component: LeadsComponent},
  {path: 'accounts', component: AccountsComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
