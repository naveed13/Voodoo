
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

//------------------Output1 on html - LOCATION NAME------------//
      // var table2 = document.getElementById("location");
      // var rowHead3 = document.createElement("td");
      // rowHead3.textContent = loc;
      // table2.appendChild(rowHead3);

    // var table1 = document.getElementsByTagName("table")[0];

    // var tableRowLoc = document.createElement("tr");
    // var rowHeadLoc = document.createElement("th");
    // rowHeadLoc.textContent = loc;
    // tableRowLoc.appendChild(rowHeadLoc);
    // table1.appendChild(tableRowLoc);
//------------------Output1 ends on html--------------------//


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
      //------------------Output2 on html - TIME and DONUTS---------//
      // var table1 = document.getElementsByTagName("table")[0];
      // var tableRow = document.createElement("tr");
      // var rowHead = document.createElement("td");
      // //rowHead.textContent = time + ": " + donutPerHour + " donuts required.";
      // rowHead.textContent = time;
      // tableRow.appendChild(rowHead);
      // table1.appendChild(tableRow);

      total+=donutPerHour;

      // var table2 = document.getElementById("location");
      // var rowHead3 = document.createElement("td");
      // rowHead3.textContent = loc;
      // table2.appendChild(rowHead3);

      var table2 = document.getElementById("location");
      var rowHead3 = document.createElement("td");
      rowHead3.textContent = loc;
      table2.appendChild(rowHead3);

      var table1 = document.getElementById("time");
      var rowHead2 = document.createElement("td");
      rowHead2.textContent = time;
      table1.appendChild(rowHead2);

      var table = document.getElementById("hour-donuts");
      var rowHead = document.createElement("td");
      rowHead.textContent = donutPerHour;
      table.appendChild(rowHead);


      var table3 = document.getElementById("total");
      var rowHead4 = document.createElement("td");
      rowHead4.textContent = total;
      table3.appendChild(rowHead4);

      // var table4 = document.getElementById("break");
      // var rowHead5 = document.createElement("td");
      // rowHead5.textContent = "br";
      // table4.appendChild(rowHead5);


      // var totals = document.getElementById("total");
      // var rowHead4 = document.createElement("td");
      // rowHead4.textContent = total;
      // totals.appendChild(rowHead4);

      // var totalDonuts = document.getElementById("total");
      // var rowHeadTotalDonuts = document.createElement("td");
      // rowHeadTotalDonuts.textContent = total;
      // totalDonuts.appendChild(rowHeadTotalDonuts);

//------------------Output2 ends on html----------------------//




    }
      // var table4 = document.getElementById("break");
      // var rowHead5 = document.createElement("td");
      // rowHead5.textContent = </br>;
      // table4.appendChild(rowHead5);

  }

  this.donutTotalPerDay = function() {

//------------------Output3 on html TOTAL DONUTS---------------//

      var totals = document.getElementById("total");
      var rowHead4 = document.createElement("td");
      rowHead4.textContent = total;
      totals.appendChild(rowHead4);

//linebreak = document.createElement("br");

    // var table1 = document.getElementsByTagName("table")[0];
    // var tableRow3 = document.createElement("tr");
    // var rowCellTotal = document.createElement("td");
    // rowCellTotal.textContent = "Total Donuts "+ total;
    // tableRow3.appendChild(rowCellTotal);
    // table1.appendChild(tableRow3);
//------------------Output3 on html-------------------------//
  };
}



//------------------Event Listner Part Below-----------------------//
//------------------?? Possibility of for loop ??------------------//
//-----------------------------------------------------------------//




function runAppDowntown() {
  var region = new Location("Downtown", [7, 18], [80, 220], 10, 4);
  region.donutHourly();
  //region.donutTotalPerDay();
  document.getElementById("Downtown").disabled = true;
}

function runAppCapitolHill() {
  var region = new Location("Capitol Hill", [7, 18], [5,45], 45, 2);
  region.donutHourly();
  //region.donutTotalPerDay();
  document.getElementById("CapitolHill").disabled = true;

}

function runAppSouthLake() {
  var region = new Location("South Lake", [7, 18], [80, 250], 5, 6);
  region.donutHourly();
  //region.donutTotalPerDay();
  document.getElementById("SouthLake").disabled = true;
}

function runAppWedgewood() {
  var region = new Location("Wedgewood", [7, 18], [20, 60], 20, 1.5);
  region.donutHourly();
  //region.donutTotalPerDay();
  document.getElementById("Wedgewood").disabled = true;
}

function runAppBallard() {
  var region = new Location("Ballard", [7, 18], [25, 175], 33, 1);
  region.donutHourly();
  //region.donutTotalPerDay();
  document.getElementById("Ballard").disabled = true;
}


 document.getElementById("Downtown").addEventListener("click", runAppDowntown);
 document.getElementById("CapitolHill").addEventListener("click", runAppCapitolHill);
 document.getElementById("SouthLake").addEventListener("click", runAppSouthLake);
 document.getElementById("Wedgewood").addEventListener("click", runAppWedgewood);
 document.getElementById("Ballard").addEventListener("click", runAppBallard);

