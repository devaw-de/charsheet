export class HistoryLog<T> {

  private _log: Array<T> = [];
  private readonly _maxLength: number;

  public get log(): Array<T> {
    return [...this._log];
  }

  public get latest(): T {
    return this.log[this._log.length - 1];
  }

  constructor(maxLength: number) {
    this._maxLength = maxLength;
  }

  public addItem(item: T): void {
    if (this._log.length >= this._maxLength) {
      this._log.pop();
    }

    this._log.unshift(item);
  }

}
