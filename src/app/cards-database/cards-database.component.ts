import { Component, OnInit } from '@angular/core';
import { cards } from '../cards';

@Component({
  selector: 'app-cards-database',
  templateUrl: './cards-database.component.html',
  styleUrls: ['./cards-database.component.scss']
})
export class CardsDatabaseComponent implements OnInit {
  cards = cards;

  constructor() { }

  ngOnInit(): void {
  }

}