// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    return array.slice(0, 2)
}

const returnLastTwoDrivers = function (array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(n) {
    return (function (fare) {
        return fare * n
    })
}

const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function (fare) {
    return createFareMultiplier(3)(fare)
}