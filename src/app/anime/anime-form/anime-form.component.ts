import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {forbiddenNameValidator} from "../../shared/utils/forbidden-name.directive";

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.css']
})
export class AnimeFormComponent {
  animeForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$'), forbiddenNameValidator(/bob/i)]),
    cover: new FormControl(null, [Validators.required, Validators.minLength(10)])
  });

  animes: any[] = [];

  submitData(data: any): void{
    this.animes.push(data);
  }

  form(property: string): FormGroup{
    return this.animeForm.get(property) as FormGroup;
  }
}
