import React, { Component } from 'react';

import './Coin.css';
import {DefaultCoinService} from '../ex-universal/CoinService';
import {DefaultRandomizerService} from '../ex-universal/RandomizerService';

class Coin extends Component {
  constructor(props){
    super(props);
    this.possibilities = [1,2,3];
    this.randomizer = new DefaultRandomizerService();
    this.coinService = new DefaultCoinService(this.randomizer);
  }
  render() {
    return (
      <div className="Coin">
      <label>Options</label>
      {
        this.possibilities.map((object, i) =>
          <span key={i}>
            {!!i&&<span>,</span>}
            {object}
          </span>
        )
      }
      <label>Result</label>
      <span>{this.coinService.flip(this.possibilities).result}</span>
      </div>
    );
  }
}

export default Coin;
