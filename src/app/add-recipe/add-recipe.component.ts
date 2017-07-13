import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
  providers: [RecipeService]
})
export class AddRecipeComponent implements OnInit {
  @Input() childAdding: boolean;

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(name: string, author: string, description: string){
    var newRecipe: Recipe = new Recipe(name, author, description);
    this.recipeService.addRecipeToDB(newRecipe);

    this.router.navigate(['']);
  }
}
