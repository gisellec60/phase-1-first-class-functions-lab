const returnFirstTwoDrivers = (names) => {
      return names.slice(0, 2) 
}  

const returnLastTwoDrivers = (names) => {
       return names.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
    return (fare) => {
        return number * fare;
    };
}

const fareDoubler = createFareMultiplier(2);

const  fareTripler = createFareMultiplier(3);
 
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const selectDifferentDrivers = (drivers, twoDrivers) => {
    return twoDrivers(drivers);
}


