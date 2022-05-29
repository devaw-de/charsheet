const DruidSpellSlotsCharacterLevel1 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel2 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel3 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel4 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel5 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel6 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel7 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel8 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel9 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel10 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel11 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel12 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel13 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel14 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel15 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel16 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel17 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel18 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel19 = new Map<number, number>();
const DruidSpellSlotsCharacterLevel20 = new Map<number, number>();

DruidSpellSlotsCharacterLevel1.set(1, 2);
DruidSpellSlotsCharacterLevel2.set(1, 3);
DruidSpellSlotsCharacterLevel3.set(1, 4).set(2, 2);
DruidSpellSlotsCharacterLevel4.set(1, 4).set(2, 3);
DruidSpellSlotsCharacterLevel5.set(1, 4).set(2, 3).set(3, 2);
DruidSpellSlotsCharacterLevel6.set(1, 4).set(2, 3).set(3, 3);
DruidSpellSlotsCharacterLevel7.set(1, 4).set(2, 3).set(3, 3).set(4, 1);
DruidSpellSlotsCharacterLevel8.set(1, 4).set(2, 3).set(3, 3).set(4, 2);
DruidSpellSlotsCharacterLevel9.set(1, 4).set(2, 3).set(3, 3).set(4, 3).set(5, 1);
DruidSpellSlotsCharacterLevel10.set(1, 4).set(2, 3).set(3, 3).set(4, 3).set(5, 2);
DruidSpellSlotsCharacterLevel11.set(1, 4).set(2, 3).set(3, 3).set(4, 3).set(5, 2);
DruidSpellSlotsCharacterLevel12.set(1, 4).set(2, 3).set(3, 3).set(4, 3).set(5, 2).set(6, 1);
DruidSpellSlotsCharacterLevel13.set(1, 4).set(2, 3).set(3, 3).set(4, 3).set(5, 2).set(6, 1).set(7, 1);
DruidSpellSlotsCharacterLevel14.set(1, 4).set(2, 3).set(3, 3).set(4, 3).set(5, 2).set(6, 1).set(7, 1);
DruidSpellSlotsCharacterLevel15.set(1, 4).set(2, 3).set(3, 3).set(4, 3).set(5, 2).set(6, 1).set(7, 1).set(8, 1);
DruidSpellSlotsCharacterLevel16.set(1, 4).set(2, 3).set(3, 3).set(4, 3).set(5, 2).set(6, 1).set(7, 1).set(8, 1);
DruidSpellSlotsCharacterLevel17.set(1, 4).set(2, 3).set(3, 3).set(4, 3).set(5, 2).set(6, 1).set(7, 1).set(8, 1).set(9, 1);
DruidSpellSlotsCharacterLevel18.set(1, 4).set(2, 3).set(3, 3).set(4, 3).set(5, 3).set(6, 1).set(7, 1).set(8, 1).set(9, 1);
DruidSpellSlotsCharacterLevel19.set(1, 4).set(2, 3).set(3, 3).set(4, 3).set(5, 3).set(6, 2).set(7, 1).set(8, 1).set(9, 1);
DruidSpellSlotsCharacterLevel20.set(1, 4).set(2, 3).set(3, 3).set(4, 3).set(5, 3).set(6, 2).set(7, 2).set(8, 1).set(9, 1);

export const DruidSpellSlotsMap = new Map<number, Map<number, number>>();
DruidSpellSlotsMap.set(1, DruidSpellSlotsCharacterLevel1);
DruidSpellSlotsMap.set(2, DruidSpellSlotsCharacterLevel2);
DruidSpellSlotsMap.set(3, DruidSpellSlotsCharacterLevel3);
DruidSpellSlotsMap.set(4, DruidSpellSlotsCharacterLevel4);
DruidSpellSlotsMap.set(5, DruidSpellSlotsCharacterLevel5);
DruidSpellSlotsMap.set(6, DruidSpellSlotsCharacterLevel6);
DruidSpellSlotsMap.set(7, DruidSpellSlotsCharacterLevel7);
DruidSpellSlotsMap.set(8, DruidSpellSlotsCharacterLevel8);
DruidSpellSlotsMap.set(9, DruidSpellSlotsCharacterLevel9);
DruidSpellSlotsMap.set(10, DruidSpellSlotsCharacterLevel10);
DruidSpellSlotsMap.set(11, DruidSpellSlotsCharacterLevel11);
DruidSpellSlotsMap.set(12, DruidSpellSlotsCharacterLevel12);
DruidSpellSlotsMap.set(13, DruidSpellSlotsCharacterLevel13);
DruidSpellSlotsMap.set(14, DruidSpellSlotsCharacterLevel14);
DruidSpellSlotsMap.set(15, DruidSpellSlotsCharacterLevel15);
DruidSpellSlotsMap.set(16, DruidSpellSlotsCharacterLevel16);
DruidSpellSlotsMap.set(17, DruidSpellSlotsCharacterLevel17);
DruidSpellSlotsMap.set(18, DruidSpellSlotsCharacterLevel18);
DruidSpellSlotsMap.set(19, DruidSpellSlotsCharacterLevel19);
DruidSpellSlotsMap.set(20, DruidSpellSlotsCharacterLevel20);

export function DruidCantripsKnownPerLevel(level: number): number {
  if (level < 1 || level > 20) {
    return 0;
  }

  switch (true) {
    case level < 4:
      return 2;
    case level < 10:
      return 3;
    default:
      return 4;
  }
}
