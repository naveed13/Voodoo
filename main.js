function Location(loc, hours, footTraffic, percentEnter, donutsPerPerson) {
  this.loc = loc;
  this.hours = hours;
  this.footTraffic = footTraffic;
  this.percentEnter = percentEnter;
  this.donutsPerPerson = donutsPerPerson;

  this.findRandom = function() {
    var randomNumber = Math.floor((Math.random() * (this.footTraffic[1] - this.footTraffic[0] + 1)) + this.footTraffic[0]);
    return randomNumber;
  }

  this.donutHourly = function() {
    var total = 0;
    var tableEl = document.getElementById("donuts");
    tableEl.style.display = "block";

    var rowEl = document.createElement("tr");
    tableEl.appendChild(rowEl);

    var cellEl = document.createElement("td");
    cellEl.textContent = this.loc;
    rowEl.appendChild(cellEl);


    for (var i = this.hours[0]; i <= this.hours[1]; i++) {
      var randomNumber = this.findRandom(this.footTraffic);
      var traffic = percentEnter / 100;
      var peopleEnter = Math.round(randomNumber * traffic);
      var donutPerHour = Math.round(this.donutsPerPerson * peopleEnter);

      total += donutPerHour;

      var cellEl = document.createElement("td");
      cellEl.textContent = donutPerHour;
      rowEl.appendChild(cellEl);
    }

    var cellEl = document.createElement("td");
    cellEl.textContent = total;
    rowEl.appendChild(cellEl);
  };
}
//------------------Event Listner Part Below-----------------------//
function runApp() {
  if (this.id === 'Down') {var region = new Location("Downtown", [6, 18], [80, 220], 10, 4);}
  else if (this.id === 'Capitol') {var region = new Location("Capitol Hill", [6, 18], [5,45], 45, 2);}
  else if (this.id === 'South') {var region = new Location("South Lake", [6, 18], [80, 250], 5, 6);}
  else if (this.id === 'Wedge') {var region = new Location("Ballard", [6, 18], [25, 175], 33, 1);}
  else if (this.id === 'Ball') {var region = new Location("Ballard", [6, 18], [25, 175], 33, 1);}
  region.donutHourly();
  document.getElementById(this.id).disabled = true;
}

$('#Down').on('click', runApp);
$('#Capitol').on('click', runApp);
$('#South').on('click', runApp);
$('#Wedge').on('click', runApp);
$('#Ball').on('click', runApp);
$('#date').text(new Date());
$('#reLoad').on('click', function(){location.reload();});


