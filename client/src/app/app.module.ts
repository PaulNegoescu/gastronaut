import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './shared/api.service';

import { NavigationComponent } from './navigation/navigation.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { ReceipesListComponent } from './receipes/receipes-list.component';
import { ReceipeDetailsComponent } from './receipes/receipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavigationComponent,
    ReceipesListComponent,
    ReceipeDetailsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'receipes', component: ReceipesListComponent },
      { path: 'receipe/:id', component: ReceipeDetailsComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' } // 404 - Page Not Found
    ])
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
