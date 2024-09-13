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

function showTimeCity(event) {
  let citySearch = document.querySelector("#cities");
  let cityName = event.target.value.replace("_", " ").split("/")[1];
  let cityTz = moment().tz(event.target.value);
  citySearch.innerHTML = `<h2>${cityName}</h2>
        <div class="city" id="los-angeles">
          <div class="date">${cityTz.format("MMMM Do YYYY")}</div>
          <div class="time">${cityTz.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
}

let selectElement = document.querySelector("#city");
selectElement.addEventListener("change", showTimeCity);
