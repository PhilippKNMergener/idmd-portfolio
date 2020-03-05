
var rank = [364,362,356,350,338,301,324,347,351,349,341,306,316,260,304,322,337,317,302,240,279,271,294,333,
        299,298,262,280,285,314,343,330,253,256,281,287,293,332,308,245,171,214,166,331,103,248,244,232,
        237,246,206,292,218,213,157,204,203,247,250,366,235,189,133,150,156,228,290,265,268,195,163,165,
        334,300,264,208,134,152,198,202,254,261,255,210,162,187,225,297,275,267,227,348,193,278,277,336,
        286,226,196,274,296,335,315,346,257,223,243,309,323,339,310,259,201,230,307,325,327,313,270,282,
        288,242,305,329,291,177,181,229,276,326,273,251,175,249,174,183,272,258,188,168,123,138,141,176,
        167,311,289,211,200,234,328,319,153,121,124,146,179,197,215,191,154,120,137,170,303,169,139,117,
        107,126,140,132,145,118,110,95,100,112,129,108,101,75,50,47,127,361,321,76,14,12,37,49,90,93,99,43,
        25,40,61,91,87,51,45,18,32,72,78,80,58,35,28,39,68,86,85,66,48,36,46,60,64,77,52,56,17,67,55,71,70,54,
        33,30,31,57,82,81,63,59,38,34,44,74,73,65,106,114,92,98,125,111,105,29,2,9,24,41,69,16,8,1,4,10,13,15,
        7,5,3,6,11,27,21,23,22,19,20,53,88,89,79,83,84,97,119,122,160,136,180,116,109,155,216,239,219,159,135,
        164,212,269,209,184,172,142,173,252,355,233,222,178,131,143,207,236,241,192,182,158,194,312,263,238,
        190,161,148,147,151,199,340,344,352,353,357,358,359,345,231,149,144,186,283,320,318,284,221,217,205,
        295,266,342,185,128,102,94,96,113,104,115,224,354,363,365,360,130,62,42,26,220,67,120,200,100,35,130];

var numColors = 160;  
var rectWidth = 40;   // width of all of the rectangles
var rectHeight = 20;  // height of all of the rectangles
var gridOffset = 50;  // offset of the entire grid, so it moves down and to the right a bit

function setup(){
  createCanvas(700, 800);  // sets the canvas size to 700 x 800
}

function draw(){
  background(0, 110, 90);  // clears the background
  drawGrid();                 // draws the gridlines
  drawLabels();               // draws the graphs labels
  displayValues();            // calls dispaly values, which will show values on hover
}

// Draws the day, month, and gradient key labels, as well as the gradient key 
function drawLabels() {
  noStroke();
  fill(255);
  // day labels 
  textSize(11); 
  for (i = 0; i < 31; i++) {        
    text(i + 1, 65, 82 + i * 20);   
  }
  // month labels
  text("   Jan        Feb      Mar       Apr        May     June      July       Aug      Sept      Oct       Nov      Dec", 90, 65);
  
  // labels for keys
  text("Less Common", 165, 730);
  text("More Common", 420, 730);
  // gradient key
  for(i = 0; i < numColors; i++) {     
    stroke(200 - i, 200 - i, 200 - i);  
    line(250 + i, 710, 250 + i, 740);   
  } 
}

// draws the grid of rectangles
function drawGrid() {
  noStroke(); // turns off the stroke for our rectangles
  for (i = 0; i <= 365; i++) { 
    // files based on the rank, the numColors / 366 .. normalizes the color to map to some value
    fill(255 - (rank[i] * numColors / 366),255 - (rank[i] * numColors / 366), 255 - (rank[i] * numColors / 366));
    // draws the rectangle using the offset, month, day, rectWidth, and rectHeight
    rect(gridOffset + getMonth(i) * rectWidth, gridOffset + getDay(i) * rectHeight,
        rectWidth - 2, rectHeight - 2);
  }
}

// given the current index (out of 365)
// returns the month (1 based)
function getMonth(index) {
  // this variable will some up the total number of days 
  totalDays = 0;
  currentMonth = 1;
  while (totalDays + getDaysInMonth(currentMonth - 1) <= index) {
    // this adds the days in the month to totalDays
    totalDays = totalDays + getDaysInMonth(currentMonth - 1);
    // this adds 1 to currentmonth
    currentMonth++;
  }
  // when the loop stops, that means we are on our current month
  // so lets send that back to whoever called it
  return currentMonth;
}

// given the current index (out of 365)
// returns the day (1 based)
function getDay(index) {
  // this wil keep track of what month we are on
  monthIndex = 0;
  // this will keep track of what day we are on
  currentDay = 1;
  // loop up to index times
  for (i = 0; i < index; i++) {
    // check if the currentDay is equal to the days in that month
    if (currentDay == getDaysInMonth(monthIndex)) {
      // if so, then advance to the next month
      monthIndex++;
      // and set the current day back to 1
      currentDay = 1;
    } else { // otherwise
      // add 1 to the currentDay
      currentDay++;
    }
  }
  return currentDay;
}

// when the user hovers over a square
// it displays the actual rank of that day
function displayValues(){
  // determine where the mouse is hovering
  var monthIndex = (int)((mouseX - (gridOffset + rectWidth)) / rectWidth);   // 90 is the starting point of the left-most rects
  var dayIndex = (int)((mouseY - (gridOffset + rectHeight)) / rectHeight);     // 70 is the starting points of the left-most rects
  // if that mouse position is within the range of the data
  if (monthIndex >= 0 && monthIndex < 12 && dayIndex >= 0 && dayIndex < getDaysInMonth(monthIndex)) {
    // determine whether to show the text as black or white
    // 183 is about when we should switch to black
    if (rank[getNumDays(monthIndex) + dayIndex] > 183) {
      fill(255); 
    } else{
      fill(0);
    }
    // display the actual rank
    textSize(20);
    // we access the rank array, based on our dayIndex shifted over by the days in previous months
    // its drawn wherever the mouse is, so mouseX, mouseY
    text(rank[getNumDays(monthIndex) + dayIndex], mouseX, mouseY); 
  }
}

// returns the total number of days
function getNumDays(monthIndex) {
  //total number of days up to a specified month
  var dayTotal = 0;
  var count = 0;
  for (i = 0; i < monthIndex; i++) {
    // add days in current month to total
    dayTotal = dayTotal + getDaysInMonth(i);
  }
  return dayTotal;
}

//return how many days are in the mounth with the given ID
function getDaysInMonth(month) {
  if (month == 3 || month == 5 || month == 8 || month == 10) {
    return 30;
  } else if (month == 1) { 
    return 29;
  } else {
    return 31; 
  }
}