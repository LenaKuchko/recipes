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
}
