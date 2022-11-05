import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  classesHeader = {
    containerHeader: 'container-header',
    containerMenus : 'container-menus'
  };

  constructor() {}

  ngOnInit(): void {}
}
