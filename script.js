const calcTimeRemaining = end => {
  const now = new Date().getTime();
  const t = end - now;

  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((t % (1000 * 60)) / 1000);

  return {
    ms: t, //time remaining in miliseconds
    days: days,
    hours: hours,
    mins: mins,
    secs: secs
  };
};

const renderTimer = (days, hours, minutes, seconds) => {
  document.getElementById("days").innerHTML =
    days + "<span class='label'> DAY(S)</span>";

  document.getElementById("hours").innerHTML =
    ("0" + hours).slice(-2) + "<span class='label'> HR(S)</span>";

  document.getElementById("minutes").innerHTML =
    ("0" + minutes).slice(-2) + "<span class='label'> MIN(S)</span>";

  document.getElementById("seconds").innerHTML =
    ("0" + seconds).slice(-2) + "<span class='label'> SEC(S)</span>";
};

const endDate = new Date("Feb 24, 2020 8:00:00 PST").getTime();

//set time for initial second
const timeRemaining = calcTimeRemaining(endDate);
renderTimer(
  timeRemaining.days,
  timeRemaining.hours,
  timeRemaining.mins,
  timeRemaining.secs
);

const timer = setInterval(() => {
  let timeRemaining = calcTimeRemaining(endDate);

  if (timeRemaining.ms >= 0) {
    renderTimer(
      timeRemaining.days,
      timeRemaining.hours,
      timeRemaining.mins,
      timeRemaining.secs
    );
  } else {
    return (document.getElementById("countdown-space").innerText =
      "LET'S CODE");
  }
}, 1000);
