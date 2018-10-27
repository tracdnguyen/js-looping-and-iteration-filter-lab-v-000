 function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, subString) {
  let stringList = string.length;
  return drivers.filter(function(driverName) {
    return driverName.slice(0, stringList) === substring
  })
}
