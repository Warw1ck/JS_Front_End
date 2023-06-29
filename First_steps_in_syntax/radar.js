function roadRadar(kmHour, place) {
    let places = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };
    if (kmHour <= places[place]) {
        console.log(`Driving ${kmHour} km/h in a ${places[place]} zone`);
        
    }else{
        const diff = kmHour - places[place];
        let speedStatus;
        if (diff <= 20) {
            speedStatus = 'speeding'
        }else if (diff <= 40) {
            speedStatus = 'excessive speeding'
        }else{
            speedStatus = 'reckless driving'
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${places[place]} - ${speedStatus}`);
    }
}