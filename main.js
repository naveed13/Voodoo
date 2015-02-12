
function Location(loc, hours, footTraffic, percentEnter, donutsPerPerson) {

  this.loc = loc;
  this.hours = hours;
  this.footTraffic = footTraffic;
  this.percentEnter = percentEnter;
  this.donutsPerPerson = donutsPerPerson;
  var total = 0;
  this.findRandom = function() {
    var randomNumber = Math.floor((Math.random()*(this.footTraffic[1]-this.footTraffic[0]+1))+this.footTraffic[0]);
    return     (randomNumber);
  }

  this.donutHourly = function() {


      var tableRow1 = document.getElementById("time");
      var rowCell1 = document.createElement("td");
      rowCell1.textContent = loc;
      tableRow1.appendChild(rowCell1);

      var tableRow1 = document.getElementById("hourly");
      var rowCell1 = document.createElement("td");
      rowCell1.textContent = "    ";
      tableRow1.appendChild(rowCell1);




    for (var i=this.hours[0];i<=this.hours[1];i++) {


      var randomNumber=this.findRandom(this.footTraffic);
      var traffic = percentEnter/100;
      var peopleEnter = Math.round(randomNumber*traffic);
      var donutPerHour = Math.round(this.donutsPerPerson*peopleEnter);
      var time;


      if (i >12) {
        time = i-12 +":00pm";
      } else {
        time = i + ":00am";
      }


      total+=donutPerHour;

      var tableRow2 = document.getElementById("time");
      var rowCell2 = document.createElement("td");
      rowCell2.textContent = time;
      tableRow2.appendChild(rowCell2);


      var tableRow3 = document.getElementById("hourly");
      var rowCell3 = document.createElement("td");
      rowCell3.textContent = donutPerHour;
      tableRow3.appendChild(rowCell3);

   }

      var tableRow1 = document.getElementById("time");
      var rowCell1 = document.createElement("td");
      rowCell1.textContent = "Total";
      tableRow1.appendChild(rowCell1);

      var tableRow4 = document.getElementById("hourly");
      var rowCell4 = document.createElement("td");
      rowCell4.textContent = total;
      tableRow4.appendChild(rowCell4);

  }

  this.donutTotalPerDay = function() {


  };
}



//------------------Event Listner Part Below-----------------------//
//------------------?? Possibility of for loop ??------------------//
//-----------------------------------------------------------------//




function runAppDowntown() {
  var region = new Location("Downtown", [6, 18], [80, 220], 10, 4);
  region.donutHourly();
  region.donutTotalPerDay();
  document.getElementById("Downtown").disabled = true;
}

function runAppCapitolHill() {
  var region = new Location("Capitol Hill", [6, 18], [5,45], 45, 2);
  region.donutHourly();
  region.donutTotalPerDay();
  document.getElementById("CapitolHill").disabled = true;

}

function runAppSouthLake() {
  var region = new Location("South Lake", [6, 18], [80, 250], 5, 6);
  region.donutHourly();
  region.donutTotalPerDay();
  document.getElementById("SouthLake").disabled = true;
}

function runAppWedgewood() {
  var region = new Location("Wedgewood", [6, 18], [20, 60], 20, 1.5);
  region.donutHourly();
  region.donutTotalPerDay();
  document.getElementById("Wedgewood").disabled = true;
}

function runAppBallard() {
  var region = new Location("Ballard", [6, 18], [25, 175], 33, 1);
  region.donutHourly();
  region.donutTotalPerDay();
  document.getElementById("Ballard").disabled = true;
}


 document.getElementById("Down").addEventListener("click", runAppDowntown);
 document.getElementById("Capitol").addEventListener("click", runAppCapitolHill);
 document.getElementById("South").addEventListener("click", runAppSouthLake);
 document.getElementById("Wedge").addEventListener("click", runAppWedgewood);
 document.getElementById("Ball").addEventListener("click", runAppBallard);

