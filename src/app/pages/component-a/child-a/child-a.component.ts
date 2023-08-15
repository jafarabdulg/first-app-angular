import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  childAQueryParams: string = '';
  ngOnInit(): void{
    this.route.queryParams.subscribe((params) => {
      console.log(params['name']);
      this.childAQueryParams = params['name'];
    })
  }

  moveToB(): void{
    this.router.navigateByUrl('component-a/child-b');
  }
}
