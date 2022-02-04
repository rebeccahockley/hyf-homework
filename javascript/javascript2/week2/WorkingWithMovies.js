// 1. Create an array of movies containing the movies with a short title (you define what short means)

const shortTitledMovies = movies.filter((movie) => movie.title.length <= 8);
console.log(shortTitledMovies);

// 2. Create an array of movie titles with long movie titles

const longTitledMovies = movies.filter((movie) => movie.title.length >= 20);
console.log(longTitledMovies);

// 3. Count the number of movies made between 1980-1989 (including both the years)

let moviesMadeBetween1980And1989 = 0;
const moviesInGivenInterval = movies.filter((movie) => {
  if (movie.year > 1980 && movie.year < 1989) moviesMadeBetween1980And1989++;
});
console.log(moviesMadeBetween1980And1989);

// 4. Create a new array that has an extra key called tag.
// The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const addingNewKey = movies.map((movie) => {
  if (movie.rating >= 7) {
    movie.tag = "Good";
  } else if (movie.rating >= 4 && movie.rating < 7) {
    movie.tag = "Average";
  } else {
    movie.tag = "Bad";
  }
  return movie;
});
console.log(addingNewKey);

// 5.Using chaining, first filter the movies array to only contain the movies rated higher than 6.
// Now map the movies array to only the rating of the movies.

const ratedHigherThan6 = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log(ratedHigherThan6);

// 6. Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.
// So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6.
// Can you make sure the search is case insensitive?

// Feel like there's a better way to condense this but using an array
// for the words was just not working

const titlesContainingKeyWords = movies.reduce(
  (count, movie) =>
    movie.title.toLowerCase().includes("Surfer") ||
    movie.title.toLowerCase().includes("Alien") ||
    movie.title.toLowerCase().includes("Benjamin")
      ? count + 1
      : count,
  0
);
console.log(titlesContainingKeyWords);

// 7. Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
// Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"

const findDuplicateWordsInTitle = movies.filter((movie) => {
  const duplicateWords = [];
  const wordsInTitle = movie.title.toLowerCase().split(" ");
  let result = false;
  wordsInTitle.forEach((words) => {
    if (duplicateWords.includes(words)) {
      result = true;
    } else {
      duplicateWords.push(words);
    }
  });
  return result;
});

console.log(findDuplicateWordsInTitle);

// 8. Calculate the average rating of all the movies using reduce.

const averageOfMovieRatings =
  movies
    .map((movie) => movie.rating)
    .reduce((total, number) => total + number) / movies.length;
console.log(averageOfMovieRatings);
