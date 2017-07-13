import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css'],
  providers: [RecipeService]
})
export class EditRecipeComponent implements OnInit {
  @Input() selectedRecipe;

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
  }

  beginUpdatingRecipe(recipeToUpdate){
    this.recipeService.updateRecipe(recipeToUpdate);
    this.router.navigate(['']);

  }
}
