// Code your solution here
let findMatching = (drivers, string) => {
    drivers.filter(driver => {
        return driver.toUpperCase === string.toUpperCase
    })
}