
function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName === name
  })
}
