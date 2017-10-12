import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';

import {MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule
    
  ],
  declarations: [
    NavbarComponent,
    SidenavComponent
  ],

  exports: [
    NavbarComponent,
    SidenavComponent
  ]
})

export class CoreModule { }
