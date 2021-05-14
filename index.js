// Code your solution here
findMatching = (drivers, string) => {
    return drivers.filter(driver => driver.toUpperCase() === string.toUpperCase() )
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => 
        driver.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
}