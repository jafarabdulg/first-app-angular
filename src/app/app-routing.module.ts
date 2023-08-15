import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentAComponent} from "./pages/component-a/component-a.component";
import {ComponentBComponent} from "./component/component-b/component-b.component";
import {NotFoundComponent} from "./shared/component/not-found/not-found.component";
import {ChildAComponent} from "./pages/component-a/child-a/child-a.component";
import {ChildBComponent} from "./pages/component-a/child-b/child-b.component";

const routes: Routes = [
  {
    path: 'component-a',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'component-b',
    component: ComponentBComponent
  },
  {
    path: '',
    redirectTo: 'component-a',
    pathMatch: "full"
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
