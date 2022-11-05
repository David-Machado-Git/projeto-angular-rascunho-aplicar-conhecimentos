import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
})
export class MenusComponent implements OnInit {
  menus = [
    {
      nome: 'Home',
      icon: '',
      url: '/home',
      separador: '|',
    },
    {
      nome: 'Api: 01',
      icon: '',
      url: '/consumindo-api-um',
      separador: '|',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
