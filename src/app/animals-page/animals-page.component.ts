import { Component, OnInit } from '@angular/core';
import { IAnimal } from '../../types/animal';

@Component({
  selector: 'app-animals-page',
  templateUrl: './animals-page.component.html',
  styleUrls: ['./animals-page.component.scss']
})
export class AnimalsPageComponent implements OnInit {

  public items: IAnimal[] = [
    {
      name: 'Alice',
      photo: 'http://pluspng.com/img-png/png-fox-cartoon-tod-fox-and-the-hound-by-jackspade2012-1024.png',
      description: 'Foxes are small-to-medium-sized, omnivorous mammals belonging to several genera of the family Canidae'
    },
    {
      name: 'Bloom',
      photo: 'http://images.clipartpanda.com/gray-wolf-clip-art-262-cartoon-wolf.jpg',
      description: 'The gray wolf (Canis lupus), also known as the timber wolf or western wolf, is a canine native to the wilderness and remote areas of Eurasia and North America.'
    },
  ];


  public constructor() { }

  public ngOnInit(): void { }

}
