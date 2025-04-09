import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-kirby-clicks',
  standalone: true,
  imports: [NgClass],
  templateUrl: './kirby-clicks.component.html',
  styleUrl: './kirby-clicks.component.css',
})
export class KirbyClicksComponent {
  gameStarted = false;
  coins: number = 0;
  clicks: number = 0;
  kirbyClicked = false;
  flowerCliked = false;
  showFlower = false;

  flowerCount: number = 0;

  startGame() {
    this.gameStarted = true;
  }

  onKirbyClick() {
    this.kirbyClicked = true;
    this.clicks++;
    if (this.clicks < 10) {
      this.coins = this.clicks;
    } else if (this.clicks % 10 == 0) {
      //show flower
      this.showFlower = true;
    } else {
      this.coins += 2;
    }
    setTimeout(() => {
      this.kirbyClicked = false;
    }, 100);
  }

  onFlowerClick() {
    this.flowerCount++;
    this.showFlower = false;
    this.coins -= 10;
    this.coins += this.clicks * 2;
    this.flowerCliked = true;
    setTimeout(() => {
      this.flowerCliked = false;
    }, 1000);
  }
}
