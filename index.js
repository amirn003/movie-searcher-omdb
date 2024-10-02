const results = document.querySelector("#results")

// ====> GET Request
// Get query from the form
const form = document.querySelector("#search-form")

const searchMovie = (query) => {
  fetch(`https://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((result) => {
      const movieTag = `<li class="list-inline-item">
        <img src="${result.Poster}" alt="">
        <p>${result.Title}</p>
      </li>`
      results.insertAdjacentHTML("beforeend", movieTag)
    })
  })
}


// Add an EventListener
form.addEventListener("submit", (event) => {
  results.innerHTML = "";
  event.preventDefault();
  const input = event.currentTarget.querySelector("#keyword").value;
  if (input.trim() === '') {
    searchMovie("The lion king");
  }
  else {
    searchMovie(input);
  }
});


searchMovie("Harry Potter");
