import { Component, OnInit } from '@angular/core';
import { IAnimal } from '../../types/animal';
import { IBird } from '../../types/bird';

@Component({
  selector: 'app-birds-page',
  templateUrl: './birds-page.component.html',
  styleUrls: ['./birds-page.component.scss']
})
export class BirdsPageComponent implements OnInit {

  public birds: IBird[] = [
    {
      name: 'Denny',
      photo: './assets/image/bird.png',
      age: 2,
    },
    {
      name: 'Lazy',
      photo: './assets/image/bird2.png',
      age: 3
    },
  ];


  public constructor() { }

  public ngOnInit(): void { }
}
