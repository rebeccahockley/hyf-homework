async function getMovies() {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    );
    const movies = await response.json();
    const badMovies = movies.filter((movie) => movie.rating < 6);
    const badMoviesSince2000 = badMovies.filter((movie) => movie.year >= 2000);
    console.log(badMoviesSince2000);
  } catch (error) {
    console.log(error);
  }
}

getMovies();

// Promise that resolves after set time

function resolvedAfterSetTime(resolveAfter) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("I am called asynchronously");
    }, resolveAfter * 1000);
  }).then(function (result) {
    console.log(result);
  });
}

resolvedAfterSetTime(6);

// Use it with async/await

async function resolveAfterWithAsync(resolveAfter) {
  try {
    await new Promise((resolve) => {
      setTimeout(function () {
        resolve();
      }, resolveAfter * 1000);
    });
    console.log("I am called with async/await");
  } catch (error) {
    console.log(error);
  }
}

resolveAfterWithAsync(2);

// Rewrite Time

function setTimeoutPromise(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  }).then(function () {
    console.log("Called after " + delay + " milliseconds");
  });
}

setTimeoutPromise(2000);

//Location Promise

function getLocation() {
  return new Promise(function (resolve) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }).then(function () {
    console.log("Called location API");
  });
}
getLocation();

// Fetching and Waiting

function fetchAndWait() {
  return new Promise((resolve) => {
    setTimeoutPromise(3000)
      .then(() => fetch(`https://yesno.wtf/api`))
      .then((response) => response.json())
      .then((responseJson) => resolve(responseJson.answer));
  });
}

fetchAndWait().then(console.log).catch(console.error);

async function fetchAndWaitAsync() {
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    const response = await fetch(`https://yesno.wtf/api`);
    const apiDataAsync = await response.json();
    console.log(apiDataAsync.answer);
  } catch (error) {
    console.log(error);
  }
}

fetchAndWaitAsync();
