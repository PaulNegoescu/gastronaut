import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './shared/api.service';
import { RecipeService } from './recipes/recipe.service';

import { NavigationComponent } from './navigation/navigation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RecipesListComponent } from './recipes/recipes-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details.component';
import { RecipeFormComponent } from './recipes/recipe-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    WelcomeComponent,
    NavigationComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    RecipeFormComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'recipes', component: RecipesListComponent },
      { path: 'recipe/:id', component: RecipeDetailsComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' } // 404 - Page Not Found
    ])
  ],
  providers: [
    ApiService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

console.log( 'connect to db:');


