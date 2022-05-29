const ClericSpellSlotsCharacterLevel1 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel2 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel3 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel4 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel5 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel6 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel7 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel8 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel9 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel10 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel11 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel12 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel13 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel14 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel15 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel16 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel17 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel18 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel19 = new Map<number, number>();
const ClericSpellSlotsCharacterLevel20 = new Map<number, number>();

ClericSpellSlotsCharacterLevel1.set(1, 2);
ClericSpellSlotsCharacterLevel2.set(1, 3);
ClericSpellSlotsCharacterLevel3.set(1, 4).set(2, 2);
ClericSpellSlotsCharacterLevel4.set(1, 4).set(2, 3);
ClericSpellSlotsCharacterLevel5.set(1, 4).set(2, 3).set(3, 2);
ClericSpellSlotsCharacterLevel6.set(1, 4).set(2, 3).set(3, 3);
ClericSpellSlotsCharacterLevel7.set(1, 4).set(2, 3).set(3, 3).set(4, 1);
ClericSpellSlotsCharacterLevel8.set(1, 4).set(2, 3).set(3, 3).set(4, 2);
ClericSpellSlotsCharacterLevel9.set(1, 4).set(2, 3).set(3, 3).set(4, 2).set(5, 1);
ClericSpellSlotsCharacterLevel10.set(1, 4).set(2, 3).set(3, 3).set(4, 2).set(5, 2);
ClericSpellSlotsCharacterLevel11.set(1, 4).set(2, 3).set(3, 3).set(4, 2).set(5, 2).set(6, 1);
ClericSpellSlotsCharacterLevel12.set(1, 4).set(2, 3).set(3, 3).set(4, 2).set(5, 2).set(6, 1);
ClericSpellSlotsCharacterLevel13.set(1, 4).set(2, 3).set(3, 3).set(4, 2).set(5, 2).set(6, 1).set(7, 1);
ClericSpellSlotsCharacterLevel14.set(1, 4).set(2, 3).set(3, 3).set(4, 2).set(5, 2).set(6, 1).set(7, 1);
ClericSpellSlotsCharacterLevel15.set(1, 4).set(2, 3).set(3, 3).set(4, 2).set(5, 2).set(6, 1).set(7, 1).set(8, 1);
ClericSpellSlotsCharacterLevel16.set(1, 4).set(2, 3).set(3, 3).set(4, 2).set(5, 2).set(6, 1).set(7, 1).set(8, 1);
ClericSpellSlotsCharacterLevel17.set(1, 4).set(2, 3).set(3, 3).set(4, 2).set(5, 2).set(6, 1).set(7, 1).set(8, 1).set(9, 1);
ClericSpellSlotsCharacterLevel18.set(1, 4).set(2, 3).set(3, 3).set(4, 2).set(5, 3).set(6, 1).set(7, 1).set(8, 1).set(9, 1);
ClericSpellSlotsCharacterLevel19.set(1, 4).set(2, 3).set(3, 3).set(4, 2).set(5, 3).set(6, 2).set(7, 1).set(8, 1).set(9, 1);
ClericSpellSlotsCharacterLevel20.set(1, 4).set(2, 3).set(3, 3).set(4, 2).set(5, 3).set(6, 2).set(7, 2).set(8, 1).set(9, 1);

export const ClericSpellSlotsMap = new Map<number, Map<number, number>>();
ClericSpellSlotsMap.set(1, ClericSpellSlotsCharacterLevel1);
ClericSpellSlotsMap.set(2, ClericSpellSlotsCharacterLevel2);
ClericSpellSlotsMap.set(3, ClericSpellSlotsCharacterLevel3);
ClericSpellSlotsMap.set(4, ClericSpellSlotsCharacterLevel4);
ClericSpellSlotsMap.set(5, ClericSpellSlotsCharacterLevel5);
ClericSpellSlotsMap.set(6, ClericSpellSlotsCharacterLevel6);
ClericSpellSlotsMap.set(7, ClericSpellSlotsCharacterLevel7);
ClericSpellSlotsMap.set(8, ClericSpellSlotsCharacterLevel8);
ClericSpellSlotsMap.set(9, ClericSpellSlotsCharacterLevel9);
ClericSpellSlotsMap.set(10, ClericSpellSlotsCharacterLevel10);
ClericSpellSlotsMap.set(11, ClericSpellSlotsCharacterLevel11);
ClericSpellSlotsMap.set(12, ClericSpellSlotsCharacterLevel12);
ClericSpellSlotsMap.set(13, ClericSpellSlotsCharacterLevel13);
ClericSpellSlotsMap.set(14, ClericSpellSlotsCharacterLevel14);
ClericSpellSlotsMap.set(15, ClericSpellSlotsCharacterLevel15);
ClericSpellSlotsMap.set(16, ClericSpellSlotsCharacterLevel16);
ClericSpellSlotsMap.set(17, ClericSpellSlotsCharacterLevel17);
ClericSpellSlotsMap.set(18, ClericSpellSlotsCharacterLevel18);
ClericSpellSlotsMap.set(19, ClericSpellSlotsCharacterLevel19);
ClericSpellSlotsMap.set(20, ClericSpellSlotsCharacterLevel20);

export function ClericCantripsKnownPerLevel(level: number): number {
  if (level < 1 || level > 20) {
    return 0;
  }

  switch (true) {
    case level < 4:
      return 3;
    case level < 10:
      return 4;
    default:
      return 5;
  }
}
