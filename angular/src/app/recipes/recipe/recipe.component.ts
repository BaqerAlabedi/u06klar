import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  title: string = 'Recipe';
  recipe = {
    label: "",
    ingredientLines: [],
    image: ""
  };
  id = "";

  constructor(private recipeService:RecipeService, private route: ActivatedRoute){
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params) 
      console.log(params['id'])
      this.id = params['id'];

      this.recipeService.getRecipe(this.id).subscribe(result => {
        this.recipe = result.recipe;
        console.log(result)
      })
    });
  }
}
