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

  message: string;
  firstDice: number;
  secondDice: number;
  stars: string[];

  constructor() {
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
      this.message = 'Vuelves a lanzar!';
    }
  }

  addStars(): void {
    if (this.firstDice === this.secondDice) {
      this.stars.push('*');
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
