import { Component, OnInit } from '@angular/core';

const todies = {
  3: 'Todos se chupan!',
  5: 'Obligas a alguien!',
  7: 'El de tu derecha se chupa!',
  9: 'El de tu izquierda se chupa!',
  11: 'Tomas por él/ella!',
  12: 'Te chupas solo!'
};

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  dices = {
    1: './assets/img/dices/dice-1.png',
    2: './assets/img/dices/dice-2.png',
    3: './assets/img/dices/dice-3.png',
    4: './assets/img/dices/dice-4.png',
    5: './assets/img/dices/dice-5.png',
    6: './assets/img/dices/dice-6.png'
  };

  beer: string;
  message: string;
  firstDice: number;
  secondDice: number;
  stars: string[];

  constructor() {
    this.beer = './assets/img/beer/beer.png';
    this.message = 'Que empiece el juego!';
    this.firstDice = 1;
    this.secondDice = 1;
    this.stars = new Array();
  }

  ngOnInit() { }

  throwDices(): void {
    this.firstDice = Math.floor((Math.random() * 6) + 1);
    this.secondDice = Math.floor((Math.random() * 6) + 1);
    this.calculateDiceSum();
    this.addStars();
  }

  calculateDiceSum(): void {
    if (this.message === 'Te chupas') {
      this.stars = new Array();
      this.message = '';
    }
    let sum = this.firstDice + this.secondDice;
    this.message = todies['' + sum];
    if (!this.message) {
      this.message = 'Pasa el turno!';
    }
  }

  addStars(): void {
    if (this.firstDice === this.secondDice) {
      this.stars.push(this.beer);
    }
    if (this.stars.length === 3) {
      if (this.firstDice === 6) {
        this.message = 'Te chupas el doble';
      } else {
        this.message = 'Te chupas';
      }
    }
  }

}
