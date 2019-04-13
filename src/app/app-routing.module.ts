
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { MenuComponent } from './components/menu/menu.component';
import { JudgesComponent } from './components/judges/judges.component';
import { ParticipantsComponent } from './components/participants/participants.component';


  const routes: Routes = [
    {path: "menu", component: MenuComponent},{path: "judges", component: JudgesComponent},{path: "participants", component: ParticipantsComponent},
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }
