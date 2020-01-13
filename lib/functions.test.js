const assert = require('assert').strict;
const test = require('./test-helpers');

const {
  calculateDistance,
  calculatePower,
  getStationWithMostPower,
  formatErrorMessage,
  formatSuccessMessage
} = require('./functions');

/*
  Library functions test suite
 */

test('lib/calculateDistance() should return distance between station and device', () => {
  assert.equal(
    calculateDistance(0, 0, 4, 3),
    5
  );

  assert.equal(
    calculateDistance(-4, -3, 4, 3),
    10
  );

  assert.equal(
    calculateDistance(7, -3, 2, 4),
    8.602325267042627
  );
});

test('lib/calculatePower() should return power of station', () => {
  assert.equal(
    calculatePower(4, 8),
    16
  );

  assert.equal(
    calculatePower(12, 18),
    36
  );

  assert.equal(
    calculatePower(15, 7),
    0
  );
});

test('lib/getStationWithMostPower() should return station with most power', () => {
  const stations = [
    [0, 0, 10],
    [20, 20, 5],
    [10, 0, 12]
  ];

  assert.deepEqual(
    getStationWithMostPower(stations, [0, 0]),
    [0, 0, 100]
  );

  assert.deepEqual(
    getStationWithMostPower(stations, [15, 10]),
    [10, 0, 0.6718427000252355]
  );

  assert.deepEqual(
    getStationWithMostPower(stations, [18, 18]),
    [20, 20, 4.715728752538098]
  );
});

test('lib/formatErrorMessage() should return formatted error message', () => {
  assert.equal(
    formatErrorMessage([21, 37]),
    'No link station within reach for point 21,37.'
  );

  assert.equal(
    formatErrorMessage([81, 16]),
    'No link station within reach for point 81,16.'
  );

  assert.equal(
    formatErrorMessage([34, 26]),
    'No link station within reach for point 34,26.'
  );
});

test('lib/formatSuccessMessage() should return formatted success message', () => {
  assert.equal(
    formatSuccessMessage([21, 37], [17, 63, 13]),
    'Best link station for point 21,37 is 17,63 with power 13.'
  );

  assert.equal(
    formatSuccessMessage([81, 16], [24, 18, 3]),
    'Best link station for point 81,16 is 24,18 with power 3.'
  );

  assert.equal(
    formatSuccessMessage([34, 26], [5, 12, 2.5]),
    'Best link station for point 34,26 is 5,12 with power 2.5.'
  );
});
