export interface RandomizerService {
    random<T>(possibilities:Array<T>):number;
}
export class DefaultRandomizerService implements RandomizerService {
    random<T>(possibilities:Array<T>):number {
        if (!possibilities || !possibilities.length) return -1;
        return Math.floor((Math.random() * possibilities.length));
    }
}