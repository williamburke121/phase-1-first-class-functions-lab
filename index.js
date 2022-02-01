// Code your solution in this file!
const drivers = [];
drivers [0] = "Antonia"
drivers [1] = "Nuru"
drivers [2] = "Amari"
drivers [3] = "Mo"
function returnFirstTwoDrivers(){
    return (["Antonia","Nuru"])
}

function returnLastTwoDrivers(){
    return (["Amari", "Mo"])
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]



function createFareMultiplier(x){
    return function(fare){
        return fare * x
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, driverFunction){
    return driverFunction(arrayOfDrivers)
}