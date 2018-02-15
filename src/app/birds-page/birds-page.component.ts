import { Component, OnInit } from '@angular/core';
import { IAnimal } from '../../types/animal';
import { IBird } from '../../types/bird';

@Component({
  selector: 'app-birds-page',
  templateUrl: './birds-page.component.html',
  styleUrls: ['./birds-page.component.scss']
})
export class BirdsPageComponent implements OnInit {

  public items: IBird[] = [
    {
      name: 'Denny',
      photo: 'http://telegram.org.ru/uploads/posts/2017-03/1490201102_5.png',
      age: 2,
    },
    {
      name: 'Lazy',
      photo: 'https://vignette.wikia.nocookie.net/masseffect/images/8/8a/%D0%A1%D0%BE%D0%B2%D0%B0.png/revision/latest?cb=20180116154109&path-prefix=ru',
      age: 3
    },
  ];


  public constructor() { }

  public ngOnInit(): void { }
}
