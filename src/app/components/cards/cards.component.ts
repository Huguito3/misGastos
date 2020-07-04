import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  // cardsList: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  //   'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    cardsList: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'];

  constructor() { }

  ngOnInit(): void {
  }

}
