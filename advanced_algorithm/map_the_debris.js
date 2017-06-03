function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  arr = arr.map(function (val) {
    var orbit = {};
    orbit.name = val.name;
    orbit.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow((val.avgAlt + earthRadius), 3)/ GM));
    console.log(orbit);
    return orbit;
  });

  return arr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
