function solve() {
    
    
    const departButt = document.querySelector('#depart')
    const arriveButt = document.querySelector('#arrive')
    const infoTitle = document.querySelector('#info')
    let location = {
        name: '',
        next: 'depot'
    }

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${location.next}`)
    .then((res)=>res.json())
    .then((departInfo)=>{
        departButt.disabled = true
        arriveButt.disabled = false
        infoTitle.innerHTML = `<span class="info">Next stop ${departInfo.name}</span>`
        location = departInfo
    }

        
    )
    }

    async function arrive() {
        departButt.disabled = false
        arriveButt.disabled = true
        infoTitle.innerHTML = `<span class="info">Arriving at ${location.name}</span>`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();