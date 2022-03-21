const usersList = document.getElementById("container");
const userNames = ["MJanOthman", "rebeccahockley", "TatjanaOcedova"];
const promises = [
  fetch("https://api.github.com/search/repositories?q=user:MJanOthman"),
  fetch("https://api.github.com/search/repositories?q=user:rebeccahockley"),
  fetch("https://api.github.com/search/repositories?q=user:TatjanaOcedova"),
];

let users = () => {
  Promise.all(promiseArray)
    .then((response) =>
      Promise.all(response.map((response) => response.json()))
    )
    .then((data) => {
      console.log(data);

      let usersData = data.map((data) => data.items);
      console.log(usersData);

      usersData.forEach((item) => {
        const p = document.createElement("p");
        const repositories = item;
        let userRepositories = " ";
        repositories.forEach(
          (repo) => (userRepositories += `${repo.name}: ${repo.html_url}`)
        );
        p.innerHTML = `<p> ${repositories[0].owner.login}'s repositories</p>
    <p> ${userRepositories} </p>`;
        usersList.append(p);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
users();
