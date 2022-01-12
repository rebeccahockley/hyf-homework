const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTime(travelInformation) {
  const time = travelInformation.destinationDistance / travelInformation.speed;
  const hours = Math.floor(time);
  const minutes = (time % 1) * 60;
  const min = minutes.toFixed(0);
  return hours + " hours and " + min + " minutes";
}

calculateTime(travelInformation);

console.log(calculateTime(travelInformation));
