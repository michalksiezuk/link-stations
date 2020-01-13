/*
  See task.txt for assignment explanation.
*/

const { getStationWithMostPower, formatErrorMessage, formatSuccessMessage } = require('./lib/functions');

const stations = [
  [0, 0, 10],
  [20, 20, 5],
  [10, 0, 12]
];

const devices = [
  [0, 0],
  [100, 100],
  [15, 10],
  [18, 18]
];

devices.forEach((device) => {
  const station = getStationWithMostPower(stations, device);
  const message = station[2] > 0 ? formatSuccessMessage(device, station) : formatErrorMessage(device);

  console.log(message);
  /*
    Expected console output:

    Best link station for point 0,0 is 0,0 with power 100.
    No link station within reach for point 100,100.
    Best link station for point 15,10 is 10,0 with power 0.6718427000252355.
    Best link station for point 18,18 is 20,20 with power 4.715728752538098.
   */
});
