import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [RecipeService]
})
export class HomePageComponent implements OnInit {
  adding: boolean = false;
  recipes: FirebaseListObservable<any[]>;
  constructor(private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  startAdding()
  {
    this.adding = true;
  }

  goToRecipeDetailPage(clickedRecipe) {
   this.router.navigate(['recipes', clickedRecipe.$key]);
 };

}
