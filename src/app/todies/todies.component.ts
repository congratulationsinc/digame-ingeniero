import { Component, OnInit } from '@angular/core';

const todies = {
  3: {
    message: 'Todos se chupan!',
    audio: './assets/sounds/T.ogg'
  },
  5: {
    message: 'Obligas a alguien!',
    audio: './assets/sounds/O.ogg'
  },
  7: {
    message: 'El de tu derecha se chupa!',
    audio: './assets/sounds/D.ogg'
  },
  9: {
    message: 'El de tu izquierda se chupa!',
    audio: './assets/sounds/I.ogg'
  },
  11: {
    message: 'Tomas por él/ella!',
    audio: './assets/sounds/E.ogg'
  },
  12: {
    message: 'Te chupas solo!',
    audio: './assets/sounds/S.ogg'
  }
};

@Component({
  selector: 'app-todies',
  templateUrl: './todies.component.html',
  styleUrls: ['./todies.component.css']
})
export class TodiesComponent implements OnInit {
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
  audio: any;

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
    let todiesVar = todies['' + sum];
    if (!todiesVar) {
      this.message = 'Pasa el turno!';
    } else {
      this.message = todiesVar.message;
      this.playAudio(todiesVar.audio);
    }
  }

  addStars(): void {
    if (this.firstDice === this.secondDice) {
      this.stars.push(this.beer);
    }
    if (this.stars.length === 3) {
      if (this.firstDice === 6) {
        this.message = 'Te chupas el doble';
        this.playAudio('./assets/sounds/doble.ogg');
      } else {
        this.message = 'Te chupas';
        this.playAudio('./assets/sounds/par.ogg');
      }
    }
  }

  playAudio(audio): void {
    this.audio = new Audio(audio);
    this.audio.play();
  }


}
