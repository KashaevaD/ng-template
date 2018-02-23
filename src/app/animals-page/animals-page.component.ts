import { Component, OnInit } from '@angular/core';
import { IAnimal } from '../../types/animal';

@Component({
  selector: 'app-animals-page',
  templateUrl: './animals-page.component.html',
  styleUrls: ['./animals-page.component.scss']
})
export class AnimalsPageComponent implements OnInit {

  public animals: IAnimal[] = [
    {
      name: 'Alice',
      photo: './assets/image/fox.png',
      description: 'Foxes are small-to-medium-sized, omnivorous mammals belonging to several genera of the family Canidae'
    },
    {
      name: 'Bloom',
      photo: './assets/image/wolf.jpg',
      description: 'The gray wolf (Canis lupus), also known as the timber wolf or western wolf, is a canine native to the wilderness and remote areas of Eurasia and North America.'
    },
  ];


  public constructor() { }

  public ngOnInit(): void { }

}
