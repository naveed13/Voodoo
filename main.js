
  function Location(loc, hours, footTraffic, percentEnter, donutsPerPerson) {
  this.loc = loc;
  this.hours = hours;
  this.footTraffic = footTraffic;
  this.percentEnter = percentEnter;
  this.donutsPerPerson = donutsPerPerson;

  this.donutsHourlyAndTotal = function() {

    var total=0;

        for (var i=this.hours[0];i<=this.hours[1];i++) {

                  function findRandom(arrayMinMax) {
                       var randomNumber = Math.floor((Math.random()*(arrayMinMax[1]-arrayMinMax[0]+1))+arrayMinMax[0]);
                       return     (randomNumber);
                  }

                    var randomNumber=findRandom(this.footTraffic);
                    var traffic = percentEnter/100;
                    var peopleEnter = Math.round(randomNumber*traffic);
                    var donutPerHour = Math.round(this.donutsPerPerson*peopleEnter);

                        if (i >12) {
                          time = i-12 +":00pm";
                        } else {
                            time = i + ":00am";
                          }

                  total += donutPerHour;


                  var table1 = document.getElementsByTagName("table")[0];
                  var tableRow = document.createElement("tr");
                  var rowCell = document.createElement("td");
                  //var temp5 = document.createTextNode( loc +"  \t\t"+ time+"  \t\t"+ peopleEnter + "  \t\t"+donutPerHour+ "  \t\t"+total);
                  var temp4 = document.createTextNode(loc + "\t\t\t");
                  var temp3 = document.createTextNode(time);
                  var temp2 = document.createTextNode(peopleEnter);
                  var temp1 = document.createTextNode(donutPerHour);
                  var temp0 = document.createTextNode(total);

                  table1.appendChild(tableRow);
                  tableRow.appendChild(rowCell);
                  //rowCell.appendChild(temp5);
                  rowCell.appendChild(temp4);
                  rowCell.appendChild(temp3);
                  rowCell.appendChild(temp2);
                  rowCell.appendChild(temp1);
                  rowCell.appendChild(temp0);



         }
     };
  }
  var place = ["Downtown","Capitol Hill", "South Lake","Wedgewood","Ballard"],
      hours = [7,19],
      footTraffic =[[80,220],[5,45],[80,250],[20,60],[25,175]],
      percentEnter =[10,45,5,20,33],
      donutsPerPerson=[4,2,6,1.5,1];

for (var i =0; i<place.length;i++) {
  var region = new Location(place[i], hours, footTraffic[i], percentEnter[i], donutsPerPerson[i]);
  var details = region.donutsHourlyAndTotal();
}


