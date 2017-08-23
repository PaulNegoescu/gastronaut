import { Component, OnInit } from '@angular/core';
import { Router, NavigationCancel, ActivatedRoute } from '@angular/router';
import { URLSearchParams, } from '@angular/http';

@Component({
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  pageTitle: string = "Product Details";
  url: string;

  constructor(public router: Router, private route: ActivatedRoute) {
    this.url = route.snapshot.url.join('/');
  }

  ngOnInit() {
   // let path = this.router.url;
  //  console.log('>> path >> ',path);
  console.log('>>>> ',this.url );
    this.getRecipeDetails();
  }

  getRecipeDetails() {

    console.log(this);
  }

}
