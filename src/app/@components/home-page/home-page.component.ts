import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  appList = [
    {
      icon: 'las la-list-ul',
      title: 'Counter App',
      description: 'Simple Counter App',
      link: '/counter', 
    },
    {
      icon: 'las la-sort-numeric-down',
      title: 'Todo App',
      description: 'Simple Todo App',
      link: '/todo',
    },
  ]

  constructor() { }
  // icon, title, desc, link
  ngOnInit(): void {
  }

}
