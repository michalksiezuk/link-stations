/**
 * Calculates distance between station and device.
 *
 * Uses Pythagorean Theorem, see project's README for more detailed explanation.
 *
 * @param {number} stationX - Station X coordinate
 * @param {number} stationY - Station Y coordinate
 * @param {number} deviceX - Device X coordinate
 * @param {number} deviceY - Device Y coordinate
 * @returns {number} - Distance between station and device
 */
const calculateDistance = (stationX, stationY, deviceX, deviceY) => {
  return Math.sqrt(Math.pow(stationX - deviceX, 2) + Math.pow(stationY - deviceY, 2));
};

/**
 * Calculates station power.
 *
 * @param {number} distance - Distance between station and device
 * @param {number} reach - Reach of the station
 * @returns {number} - Power of the station
 */
const calculatePower = (distance, reach) => distance > reach ? 0 : Math.pow(reach - distance, 2);

/**
 * Sorts by station power in descending order.
 *
 * @param {Array<number>} stationA
 * @param {Array<number>} stationB
 * @returns {number}
 */
const sortByPower = (stationA, stationB) => stationB[2] - stationA[2];

/**
 * Selects strongest station for given device.
 *
 * For certain stations/device configuration power of strongest station might still be 0.
 *
 * @param {Array<Array<number>>} stations - Array of stations
 * @param {Array<number>} device - Device x,y coordinates
 * @returns {Array<number>} - Station with most power
 */
const getStationWithMostPower = (stations, device) => {
  const sortedStations = stations.map((station) => {
    const [deviceX, deviceY] = device;
    const [stationX, stationY, reach] = station;

    const distance = calculateDistance(stationX, stationY, deviceX, deviceY);
    const power = calculatePower(distance, reach);

    return [stationX, stationY, power];
  }).sort(sortByPower);

  return sortedStations[0];
};

/**
 * Formats error message for given device.
 *
 * @param {Array<number>} device - Array of x,y device coordinates
 * @returns {string} - Formatted error message
 */
const formatErrorMessage = (device) => {
  const [deviceX, deviceY] = device;

  return `No link station within reach for point ${deviceX},${deviceY}.`;
};

/**
 * Formats success message for given device and station.
 *
 * @param {Array<number>} device - Array of x,y device coordinates
 * @param {Array<number>} station - Array of x,y station coordinates and station power
 * @returns {string} - Formatted success message
 */
const formatSuccessMessage = (device, station) => {
  const [deviceX, deviceY] = device;
  const [stationX, stationY, power] = station;

  return `Best link station for point ${deviceX},${deviceY} is ${stationX},${stationY} with power ${power}.`;
};

module.exports = {
  calculateDistance,
  calculatePower,
  getStationWithMostPower,
  formatErrorMessage,
  formatSuccessMessage
};
