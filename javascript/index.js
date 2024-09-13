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

function showTimeCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }

  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citySearch = document.querySelector("#cities");
  citySearch.innerHTML = `<h2>${cityName}</h2>
        <div class="city">
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        <a href="/">All cities</a>`;
}

let selectElement = document.querySelector("#city");
selectElement.addEventListener("change", showTimeCity);

showTime();
setInterval(showTime, 1000);
