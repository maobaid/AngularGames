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
  starCount: number = 0;
  showStar = false;
  starCliked = false;
  countdown: number = 5;
  intervalId: any;
  boostFlowerClicked = false;

  kirbySize = 100;
  BoxSize = 100;

  startGame() {
    this.gameStarted = true;
  }

  onKirbyClick() {
    this.kirbyClicked = true;
    this.clicks++;
    if (this.boostFlowerClicked) {
      this.coins += this.coins * 2;
    } else if (this.clicks % 10 == 0) {
      //show flower
      this.showFlower = true;
      if (this.flowerCount % 3 == 0 && this.flowerCount != 0) {
        this.showStar = true;
        this.showFlower = false;

        console.log('Show flower ' + this.showFlower);
        console.log('Show star ' + this.showStar);
      }
    } else {
      this.coins++;
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

  onStarClick() {
    this.starCount++;
    this.showStar = false;
    this.coins -= 30;
    this.starCliked = true;
    this.coins += this.clicks * 3;
    setTimeout(() => {
      this.starCliked = false;
    }, 1000);
  }

  biggerKirby() {
    if (this.flowerCount > 0) {
      this.boostFlowerClicked = true;
      this.flowerCount--;
      this.kirbySize = 300;
      this.BoxSize = 250;
      this.intervalId = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
          //kirby size x2 , coins *4
        } else {
          clearInterval(this.intervalId);
          // Optionally do something when the countdown finishes
          console.log('Countdown complete!');
          this.boostFlowerClicked = false;
          this.kirbySize = 100;
          this.BoxSize = 100;
          this.countdown = 5;
        }
      }, 1000);
    }
  }
}
