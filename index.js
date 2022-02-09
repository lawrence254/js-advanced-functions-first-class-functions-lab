// Code your solution in this file

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier = (multiplier) => {
    return function (fare) { return multiplier * fare }
}

let fareDoubler = createFareMultiplier(2)


const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, driverFn) => {
    return driverFn(drivers)
}
