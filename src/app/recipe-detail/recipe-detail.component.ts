import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import {TranslateService} from '@ngx-translate/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [RecipeService]
})
export class RecipeDetailComponent implements OnInit {
  recipeId: string = null;
  edit: boolean = false;
  showProperties: boolean = true;
  recipeToDisplay;
  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.recipeId = (urlParameters["$key"]);
    });
    this.recipeToDisplay = this.recipeService.findRecipeDetail(this.recipeId);

    this.recipeService.findRecipeDetail(this.recipeId).subscribe(dataLastEmittedFromObserver => {
      this.recipeToDisplay = dataLastEmittedFromObserver;
      console.log(this.recipeToDisplay);
    })

  }
  editRecipe(){
    this.edit = true;
    this.showProperties = false;
  }
  beginDeletingRecipe(selectedRecipe) {
    this.recipeService.findRecipeDetail(this.recipeId).subscribe(dataLastEmittedFromObserver => {
      this.recipeToDisplay = dataLastEmittedFromObserver;
      this.recipeService.deleteRecipe(this.recipeToDisplay);
    });
    this.router.navigate(['']);
  }
}
