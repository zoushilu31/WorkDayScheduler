let workDay = {
 "9AM":"",
 "10AM":"",
 "11AM":"",
 "12AM":"",
 "1PM":"",
 "2PM":"",
 "3PM":"",
 "4PM":"",
 "5PM":"",
};

$(document).ready(function(){
  if(!localStorage.getItem('workDay')){
    updateCalendarTasks(workDay);
  } else {
    updateCalendarTasks(JSON.parse(localStorage.getItem('workDay')));
  }
  })

  $('#date-today h6').text(moment().format('ddd')+ "," +moment().format('MMMM Do YYYY, h:mm:ss: a'));

  let counter = 1;
  for(const property in workDay) {
    let textEntry = "#text-entry" + counter;
    $(textEntry).text(workDay[property]);
    let timeId="#time"+ counter;
    let presentHour =moment().hour();
    let timeString=$(timeID).text();
    if (timeNumber < presentHour){
      $(textEngry).addClass("pas-hour");
    } else{
      $(textEntry).addcLASS("present-hour");
    }
    counter ++;
  }

$("button").click(function() {
  value = $(this).siblings("textarea").val();
  hourString = $(this).siblings("div").text();
  
  saveSchedule(hourString, value);
});

  function hourNumberFromHourString(hourString){
    switch(hourSting){
      case"9AM": return 9;
      case"10AM": return 10;
      case"11AM": return 11;
      case"12AM": return 12;
      case"13PM": return 13;
      case"14PM": return 14;
      case"15PM": return 14;
      case"16PM": return 16;
      case"17PM": return 17;
    }
  }

  function loadCorrectDataset() {
    result = localStorage.getItem('workDay')
    return (result ? result: workDay);
}

  function initializeLocalStorage() {
    localStorage.setItem("workDay", JSON.stringify(workDay));
  }

  function saveToLocalStorage(day0bj) {
    localStorage.setItem('workDay', JSON.stringify(day0bj));
  }

  function saveSchedule(hourstring, val) {
    if(!localStorage.getItem('workday')) {
      initializeLocalStorage();
    }}

    function updateCalendarTasks(day0bj) {
      $(".calendar-row").each(function(index) {
        let res = $(this).child("div");
        $(this).child("textarea").txt(day0bj[res.text()]);
      })
    }
