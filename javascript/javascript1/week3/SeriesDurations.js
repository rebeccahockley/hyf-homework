const seriesDurations = [
  {
    title: "Grey's Anatomy",
    days: 11,
    hours: 15,
    minutes: 30,
  },
  {
    title: "The Office",
    days: 2,
    hours: 23,
    minutes: 30,
  },
  {
    title: "Brooklyn Nine-Nine",
    days: 2,
    hours: 5,
    minutes: 12,
  },
];

const lifespan = 80;

function logOutSeriesText(seriesDurations) {
  const durationsArray = [];
  for (let i = 0; i < seriesDurations.length; i++) {
    const daysInHours = seriesDurations[i].days * 24;
    const hoursInHours = seriesDurations[i].hours;
    const minutesInHours = seriesDurations[i].minutes / 60;
    const percentage =
      ((daysInHours + hoursInHours + minutesInHours) / (lifespan * 8760)) * 100;
    durationsArray.push(percentage);
    console.log(
      seriesDurations[i].title +
        " took " +
        durationsArray[i].toFixed(3) +
        "%" +
        " of my life"
    );
  }
  let sumOfDurationsArray = 0;
  for (let i = 0; i < durationsArray.length; i++) {
    sumOfDurationsArray += durationsArray[i];
  }
  console.log(
    "In total, this is " + sumOfDurationsArray.toFixed(3) + "% of my life"
  );
}

logOutSeriesText(seriesDurations);
