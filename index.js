// Code your solution in this file!
function distanceFromHqInBlocks(value1) {
    let blocks; 
    if (value1 < 42){
        blocks = 42 - value1;
    }
    else if (value1 > 42) {
       blocks = value1 - 42;

    }
    return blocks;

}

function distanceFromHqInFeet(value1){
    distanceFromHqInBlocks(value1);

    return distanceFromHqInBlocks(value1) * 264;

}

function distanceTravelledInFeet(start, destination){
    let feet = (destination - start) * 264;
    if (start > destination) {
        feet = (start - destination) * 264;
    }
    return feet;

}


function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
       console.log('gives customer a free sample');
       return 0;
      
    }
    else if (distance > 400 && distance <= 2000){
        let standardPrice = (distance - 400) * 0.02;
        return standardPrice;
    }
    else if (distance > 2000 && distance <= 2500){
        let premiumPrice = 25;
        return premiumPrice;
    }
    else {
        
        return "cannot travel that far";
    }
}

calculatesFarePrice(34, 24);
