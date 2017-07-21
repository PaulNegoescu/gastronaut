import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReceipesListComponent } from './receipes-list.component';
import { ReceipeDetailsComponent } from './receipe-details.component'


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'receipes', component: ReceipesListComponent },
      { path: 'receipe/:id',
        // canActivate: [ ProductDetailGuard],
         component: ReceipeDetailsComponent
      }
    ])
  ],
  declarations: [
    ReceipesListComponent,

  ],
  providers: [

  ]
})
export class ReceipeModule {}
