function attachEvents() {
    weatherSymbols = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176'
    }
    cities = {
        'London': 1,
        'Barcelona': 2,
        'New York': 0
    }
    submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', checkTheWeather, true);

    function checkTheWeather() {
        const place = document.querySelector('#location');
        fetch(`http://localhost:3030/jsonstore/forecaster/locations/${cities[place.value]}`)
            .then((res) => res.json())
            .then((placeInfo) => {
                console.log(placeInfo);
                document.querySelector('#forecast').style.display = 'block';
                fetch(`http://localhost:3030/jsonstore/forecaster/today/${placeInfo.code}`)
                    .then((res) => res.json())
                    .then((todayInfo) => {
                        const forecastCurrent = document.querySelector('#current');

                        const forecast = document.createElement('div');
                        forecast.className = 'forecast';
                        forecast.innerHTML = `
                            <span class="condition symbol">${weatherSymbols[todayInfo.forecast.condition]}</span>
                            <span class="condition">
                                <span class="forecast-data">${todayInfo.name}</span>
                                <span class="forecast-data">${todayInfo.forecast.low}/${todayInfo.forecast.high}</span>
                                <span class="forecast-data">${todayInfo.forecast.condition}</span>
                            </span>
                        `;
                        forecastCurrent.appendChild(forecast);
                        fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${placeInfo.code}`)
                        .then((res)=> res.json())
                        .then((treeDayInfo)=>{
                            const forecastUpcoming = document.querySelector('#upcoming')
                            const  upcomingForecast = document.createElement('div')
                            upcomingForecast.className = 'forecast-info'
                            for (const element of treeDayInfo.forecast) {
                                const upcoming = document.createElement('span')
                                upcoming.className = 'upcoming'
                                upcoming.innerHTML =  `<span class="symbol">${weatherSymbols[element.condition]}</span>
                                <span class="forecast-data">${element.low}/${element.high}</span>
                                <span class="forecast-data">${element.condition}</span>`
                                upcomingForecast.appendChild(upcoming)
                                
                            }
                            forecastUpcoming.appendChild(upcomingForecast)
                        })
                    });
            }).catch(()=>{
                const forecast = document.querySelector('#forecast')
                forecast.style.display = 'block'
                forecast.innerHTML = 'Error'})
        }
        
    }

attachEvents();
