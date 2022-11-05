import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  classesHome = {
    containerHome: 'containerHome',
    containerBlockEx: 'containerBlockEx',
    titles: 'titles'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
