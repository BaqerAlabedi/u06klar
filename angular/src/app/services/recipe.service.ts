import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  appid = "3e1ab408";
  appkey = "94623face29f896f2a6be96a715eaa07";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept-Language': 'en'
    })
  }

  
  constructor(private http: HttpClient) { }

  getRecipesByURL(url: string) {
    return this.http.get<any>(url, this.httpOptions);
  }
  getLunchRecipes() {
    const url = "https://api.edamam.com/api/recipes/v2?type=public&app_id=" + this.appid + "&app_key=" + this.appkey + "&cuisineType=French&mealType=Lunch&dishType=Pancake&dishType=Salad&dishType=Sandwiches&dishType=Soup&field=label&field=image&field=ingredientLines&field=ingredients&health=gluten-free&health=peanut-free&health=tree-nut-free&health=vegetarian"; // Uppdatera URL till det nya API:et
    return this.getRecipesByURL(url);
  }
  getDinnerRecipes() {
    const url = "https://api.edamam.com/api/recipes/v2?type=public&app_id=" + this.appid + "&app_key=" + this.appkey + "&cuisineType=Italian&mealType=Dinner&dishType=Pancake&dishType=Salad&dishType=Sandwiches&dishType=Soup&field=label&field=image&field=ingredientLines&field=ingredients&health=gluten-free&health=peanut-free&health=tree-nut-free&health=vegetarian"; // Uppdatera URL till det nya API:et
    return this.getRecipesByURL(url);
  }

  getBreakfastRecipes() {
    const url = "https://api.edamam.com/api/recipes/v2?type=public&app_id=" + this.appid + "&app_key=" + this.appkey + "&mealType=Breakfast&field=label&field=image&field=images&field=source&field=url&field=shareAs&field=yield&field=dietLabels&field=healthLabels&field=cautions&field=ingredientLines&field=ingredients"; // Uppdatera URL till det nya API:et
    return this.getRecipesByURL(url);
  }

  getRecipe(id: string) {
    const url = "https://api.edamam.com/api/recipes/v2/" + id + "?type=public&app_id=" + this.appid + "&app_key=" + this.appkey + "&field=label&field=image&field=ingredientLines";
    return this.getRecipesByURL(url);
  }


  getRecipesByKeyword(keyword: string) {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=${this.appid}&app_key=${this.appkey}&cuisineType=American&field=label&field=image&field=ingredientLines&field=ingredients&health=gluten-free&health=peanut-free&health=tree-nut-free&health=vegetarian`;
    return this.getRecipesByURL(url);
  }

  getRecipesByFilter(filter: string, healthFilters: string) {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${this.appid}&app_key=${this.appkey}&mealType=${filter}&field=label&field=image&field=ingredientLines&field=ingredients&${healthFilters}`;
    return this.getRecipesByURL(url);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
