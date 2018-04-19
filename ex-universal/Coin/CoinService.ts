import {RandomizerService} from '../RandomizerService';
export interface CoinService {
    flip<T>(possibilities: T[]): CoinFlip<T>;
}
export class CoinFlip<T> {
    constructor(
        private possibilities: Array<T>,
        public result: T
    ) {
    }
}
export class DefaultCoinService implements CoinService {
    constructor(
        private randomizer: RandomizerService
    ) {

    }
    private flips: Array<CoinFlip<any>> = [];
    flip<T>(possibilities: T[]): CoinFlip<T> {
        var flip = new CoinFlip<T>(
            possibilities,
            possibilities[this.randomizer.random<T>(possibilities)]
        );
        this.flips.push(flip);
        return flip;
    }
}