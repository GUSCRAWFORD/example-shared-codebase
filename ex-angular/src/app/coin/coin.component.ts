import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  constructor(private coinService:CoinService) { }
  possibilities = ['A','B','C'];
  result;
  ngOnInit() {
    this.result = this.coinService.flip(this.possibilities).result;
  }

}
