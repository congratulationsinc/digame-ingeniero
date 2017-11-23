import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todies',
  templateUrl: './todies.component.html',
  styleUrls: ['./todies.component.css']
})
export class TodiesComponent implements OnInit {
  todies = {
    3: {
      message: 'Todos se chupan!',
      audio: './assets/sounds/T.ogg',
      fontSize: '500%',
      fontColor: '#FFF'
    },
    5: {
      message: 'Obligas a alguien!',
      audio: './assets/sounds/O.ogg',
      fontSize: '500%',
      fontColor: '#FFF'
    },
    7: {
      message: 'El de tu derecha se chupa!',
      audio: './assets/sounds/D.ogg',
      fontSize: '500%',
      fontColor: '#FFF'
    },
    9: {
      message: 'El de tu izquierda se chupa!',
      audio: './assets/sounds/I.ogg',
      fontSize: '500%',
      fontColor: '#FFF'
    },
    11: {
      message: 'Tomas por él/ella!',
      audio: './assets/sounds/E.ogg',
      fontSize: '500%',
      fontColor: '#FFF'
    },
    12: {
      message: 'Te chupas solo!',
      audio: './assets/sounds/S.ogg',
      fontSize: '500%',
      fontColor: '#FFF'
    }
  };

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
  throwEnable: boolean;
  audio: any;

  constructor() {
    this.beer = './assets/img/beer/beer.png';
    this.message = 'Que empiece el juego!';
    this.firstDice = 1;
    this.secondDice = 1;
    this.stars = new Array();
    this.throwEnable = true;
  }

  ngOnInit() { }

  throwDices(): void {
    this.firstDice = Math.floor((Math.random() * 6) + 1);
    this.secondDice = Math.floor((Math.random() * 6) + 1);
    this.setFontSizeToDefault();
    this.setFontSelectedColor();
    this.calculateDiceSum();
    this.addStars();
  }

  calculateDiceSum(): void {
    if (this.message === 'Te chupas'
      || (this.message === 'Te chupas el doble' && this.stars.length === 3)) {
      this.stars = new Array();
      this.message = '';
    }
    let sum = this.firstDice + this.secondDice;
    let todiesVar = this.todies['' + sum];
    if (!todiesVar) {
      this.message = 'Pasa el turno!';
    } else {
      this.throwEnable = false;
      todiesVar.fontSize = '600%';
      todiesVar.fontColor = '#74787B';
      if (todiesVar.message === 'Te chupas solo!') {
        if (this.stars.length !== 2) {
          this.message = todiesVar.message;
          this.playAudio(todiesVar.audio);
        }
      } else {
        this.message = todiesVar.message;
        this.playAudio(todiesVar.audio);
      }
    }
  }

  addStars(): void {
    if (this.firstDice === this.secondDice) {
      this.stars.push(this.beer);
    }
    if (this.stars.length === 3) {
      if (this.firstDice === 6) {
        this.throwEnable = false;
        this.message = 'Te chupas el doble';
        this.playAudio('./assets/sounds/doble.ogg');
      } else {
        this.throwEnable = false;
        this.message = 'Te chupas';
        this.playAudio('./assets/sounds/par.ogg');
      }
    }
  }

  playAudio(audio): void {
    this.audio = new Audio(audio);

    this.audio.onerror = () => {
      this.throwEnable = true;
    }

    this.audio.onended = () => {
      this.throwEnable = true;
    }

    this.audio.play();
  }

  setFontSizeToDefault() {
    this.todies[3].fontSize = '500%';
    this.todies[5].fontSize = '500%';
    this.todies[7].fontSize = '500%';
    this.todies[9].fontSize = '500%';
    this.todies[11].fontSize = '500%';
    this.todies[12].fontSize = '500%';
  }

  setFontSelectedColor() {
    this.todies[3].fontColor = '#FFF';
    this.todies[5].fontColor = '#FFF';
    this.todies[7].fontColor = '#FFF';
    this.todies[9].fontColor = '#FFF';
    this.todies[11].fontColor = '#FFF';
    this.todies[12].fontColor = '#FFF';
  }
}
