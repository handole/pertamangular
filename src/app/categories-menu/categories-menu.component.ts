import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.css']
})
export class CategoriesMenuComponent implements OnInit {

  constructor(route: ActivatedRoute) { 
    route.params.subscribe(params => console.log("Side menu id parameter", params['id']));
  }

  ngOnInit() {
  }

}
