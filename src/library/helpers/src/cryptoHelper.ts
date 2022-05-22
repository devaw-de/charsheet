export class CryptoHelper {

  /**
   * Creates a pseudo-random string that imitates Uuid v3.
   * Do not use this method for sensitive processes.
   */
  public static createFakeUuid(): string {
    const uuid = CryptoHelper._createUuidBlock()
      + CryptoHelper._createUuidBlock()
      + '-'
      + CryptoHelper._createUuidBlock()
      + '-3'
      + CryptoHelper._createUuidBlock().substr(0, 2)
      + '-'
      + CryptoHelper._createUuidBlock()
      + '-'
      + CryptoHelper._createUuidBlock()
      + CryptoHelper._createUuidBlock()
      + CryptoHelper._createUuidBlock();
    return uuid.toLowerCase();
  }

  private static _createUuidBlock(): string {
    const rnd = 1 + Math.random();
    // tslint:disable-next-line:no-bitwise
    return ((rnd * 0x10000 ) | 0 ).toString(16).substring(1);
  }

}
