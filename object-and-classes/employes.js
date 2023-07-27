function makeEmployeesList(names) {
    const result = names.reduce((acc, name) => {
        acc[name] = name.length
        return acc
    }, {})
    Object.keys(result).forEach((key) => {
        console.log(`Name: ${key} -- Personal Number: ${result[key]}`)
    })
}

makeEmployeesList(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal'])