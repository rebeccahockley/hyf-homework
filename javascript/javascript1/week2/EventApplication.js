const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const todayDate = new Date();
const todayDay = daysOfTheWeek[todayDate.getDay()];

function getEventDay(num) {
  const todayDate = new Date();
  const todayDay = todayDate.getDay();
  return (num + todayDay) % 7;
}

const eventDay = getEventDay(16);

const eventDayOfTheWeek = daysOfTheWeek[eventDay];
console.log(eventDayOfTheWeek);
