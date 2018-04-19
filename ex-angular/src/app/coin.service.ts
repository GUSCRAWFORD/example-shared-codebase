import { Injectable } from '@angular/core';
import { DefaultCoinService,
  CoinService as UniversalCoinService,
  CoinFlip
 } from '../../../ex-universal/Coin/CoinService';
import { DefaultRandomizerService } from '../../../ex-universal/RandomizerService';
@Injectable()
export class CoinService implements UniversalCoinService {
  private ngCoinService: DefaultCoinService;
  constructor() {
    this.ngCoinService = new DefaultCoinService(new DefaultRandomizerService());
  }

  flip<T>(possibilities: T[]):CoinFlip<T> {
    return this.ngCoinService.flip<T>(possibilities);
  }
}
