import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes/recipes.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/recipe/:id', component: RecipeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'logout', component: LogoutComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
