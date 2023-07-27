function getInfo() {
    const stopId = document.querySelector('#stopId');
    const listBuses = document.querySelector('#buses');
    listBuses.innerHTML = '';
    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`)
    .then((res)=>res.json())
    .then((busInfo)=>{
        document.querySelector('#stopName').innerText = busInfo.name
        console.log(Object.entries(busInfo.buses))
        Object.entries(busInfo.buses).map(([busNumber, timeMinutes])=>{
            const item = document.createElement('li')
            item.innerText = (`Bus ${busNumber} arrives in ${timeMinutes} minutes`)
            listBuses.appendChild(item)

        })
    }).catch(()=>{
        document.querySelector('#stopName').innerText = 'Error'
    }
       
    )
    stopId.value = ''
}