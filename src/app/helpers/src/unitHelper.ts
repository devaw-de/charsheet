export class UnitHelper {

  public static feetToMeters(distance: number): string {
    return (Math.floor(distance / 3.33 * 10) / 10).toFixed(2);
  }

}
