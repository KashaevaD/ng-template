import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { IAnimal } from '../../types/animal';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
  host: {
    class: 'page-layout'
  }
})
export class PageLayoutComponent implements OnInit {

  @Input() public itemTemplate: TemplateRef<any>;
  @Input() public items: any[];


  public constructor() { }

  public ngOnInit(): void { }

}
