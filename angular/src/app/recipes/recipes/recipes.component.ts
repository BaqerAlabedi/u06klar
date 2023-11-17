import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  title: string = '';
  searchquery = "";
  allRecipes: any;

  filterNuts: boolean = false;
  filterVegetarian: boolean = false;
  filterGluten: boolean = false;

  constructor(private recipeService: RecipeService) { }

  getBreakfastRecipes() {
    this.recipeService.getBreakfastRecipes().subscribe(result => {
      this.allRecipes = result.hits.map((data: any) => {
        let recipe = data.recipe;
        recipe.idref = data._links.self.href.slice(38, 70);
        return recipe;
      });
    });
  }

  getDinnerRecipes() {
    this.recipeService.getDinnerRecipes().subscribe(result => {
      this.allRecipes = result.hits.map((data: any) => {
        let recipe = data.recipe;
        recipe.idref = data._links.self.href.slice(38, 70);
        return recipe;
      });
    });
  }

  getLunchRecipes() {
    this.recipeService.getLunchRecipes().subscribe(result => {
      this.allRecipes = result.hits.map((data: any) => {
        let recipe = data.recipe;
        recipe.idref = data._links.self.href.slice(38, 70);
        return recipe;
      });
    });
  }

  getRecipes() {
    this.recipeService.getRecipesByKeyword(this.searchquery).subscribe(result => {
      this.allRecipes = result.hits.map((data: any) => {
        let recipe = data.recipe;
        recipe.idref = data._links.self.href.slice(38, 70);
        return recipe;
      });
    });
  }
}
