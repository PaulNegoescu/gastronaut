import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecipesListComponent } from './recipes-list.component';
import { RecipeDetailsComponent } from './recipe-details.component';
import { RecipeFormComponent } from './recipe-form.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './recipe.service';


@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'recipes', component: RecipesListComponent },
      { path: 'recipe/:id',
        // canActivate: [ ProductDetailGuard],
         component: RecipeDetailsComponent
      }
    ])
  ],
  declarations: [
    RecipesListComponent,
    RecipeDetailsComponent,
    RecipeFormComponent
  ],
  providers: [
    RecipeService
  ]
})
export class RecipeModule {}
