import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class RecipeService {
  recipes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.recipes = database.list('recipes');
    console.log(this.recipes);
   }

   getRecipes(){
     return this.recipes;
   }

   addRecipeToDB(newRecipe: Recipe)
   {
     this.recipes.push(newRecipe);
   }

   findRecipeDetail(key: string){
     return this.database.object('recipes/' + key);
   }

   updateRecipe(recipeToUpdate){
     var recipeEntryInDB = this.findRecipeDetail(recipeToUpdate.$key);
     recipeEntryInDB.update({name: recipeToUpdate.name,
                            author: recipeToUpdate.author,
                            description: recipeToUpdate.description});
   }

   deleteRecipe(recipeToDelete){
     var recipeEntryInDB = this.findRecipeDetail(recipeToDelete.$key);
     console.log(recipeEntryInDB);
     recipeEntryInDB.remove();
   }
}
