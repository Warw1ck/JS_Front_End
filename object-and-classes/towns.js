function townCollectInfo(towns) {
    const info = towns.reduce((list, element)=>{
        const [town, latitude, longitude] = element.split(' | ')
        list.push({town:town, latitude: Number(latitude).toFixed(2), longitude:Number(longitude).toFixed(2)})
        return list
    }, [])
    info.forEach(element => {
        console.log(element)
        
    });
    
}
townCollectInfo(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])