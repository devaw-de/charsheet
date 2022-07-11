import {PointBuyHelper} from './point-buy.helper';

describe('PointBuyComponent', () => {

  it('should get the correct point buy cost', () => {
    const values = [
      {
        scoreValue: 7,
        pointBuyCost: 0
      },
      {
        scoreValue: 8,
        pointBuyCost: 0
      },
      {
        scoreValue: 9,
        pointBuyCost: 1
      },
      {
        scoreValue: 10,
        pointBuyCost: 2
      },
      {
        scoreValue: 11,
        pointBuyCost: 3
      },
      {
        scoreValue: 12,
        pointBuyCost: 4
      },
      {
        scoreValue: 13,
        pointBuyCost: 5
      },
      {
        scoreValue: 14,
        pointBuyCost: 7
      },
      {
        scoreValue: 15,
        pointBuyCost: 9
      },
      {
        scoreValue: 16,
        pointBuyCost: 0
      }
    ];
    for (const v of values) {
      expect(PointBuyHelper.getPointCost(v.scoreValue)).toEqual(v.pointBuyCost);
    }
  });

  it('should get the correct point buy cost difference', () => {
    const values = [
      {
        currentValue: 0,
        expectedResult: 0
      },
      {
        currentValue: 7,
        expectedResult: 0
      },
      {
        currentValue: 8,
        expectedResult: 1
      },
      {
        currentValue: 9,
        expectedResult: 1
      },
      {
        currentValue: 10,
        expectedResult: 1
      },
      {
        currentValue: 11,
        expectedResult: 1
      },
      {
        currentValue: 12,
        expectedResult: 1
      },
      {
        currentValue: 13,
        expectedResult: 2
      },
      {
        currentValue: 14,
        expectedResult: 2
      },
      {
        currentValue: 15,
        expectedResult: 0
      }
    ];

    for (const v of values) {
      expect(PointBuyHelper.getIncreaseCost(v.currentValue)).toEqual(v.expectedResult);
    }
  });

});
