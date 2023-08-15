import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  childBId: string = '';
  ngOnInit(): void{
    this.route.params.subscribe((params) => {
      console.log('Params: ', params['id']);
      this.childBId = params['id'];
    });
  }

  moveToA(): void{
    this.router.navigateByUrl('component-a/child-a');
  }
}