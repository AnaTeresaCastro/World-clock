function showTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTime = losAngelesElement.querySelector(".time");
  losAngelesDate.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  losAngelesTime.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");

  let ParisElement = document.querySelector("#paris");
  let ParisDate = ParisElement.querySelector(".date");
  let ParisTime = ParisElement.querySelector(".time");
  ParisDate.innerHTML = moment().tz("Europe/Paris").format("MMMM Do YYYY");
  ParisTime.innerHTML = moment()
    .tz("Europe/Paris")
    .format("h:mm:ss [<small>]A[</small>]");
}
setInterval(showTime, 1000);
