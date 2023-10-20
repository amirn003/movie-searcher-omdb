const results = document.querySelector("#results")

// Get query from the form
const form = document.querySelector("#search-form")
console.log(form)

// Add an EventListener
form.addEventListener("submit", (event) => {
  event.preventDefault()
  const input = event.currentTarget.querySelector(".form-control").value
  console.log(input)
  searchMovie(input)

})


const searchMovie = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    data.Search.forEach((result) => {
      const movieTag = `<li class="list-inline-item">
        <img src="${result.Poster}" alt="">
        <p>${result.Title}</p>
      </li>`
      results.insertAdjacentHTML("beforeend", movieTag)
    })
  })
}
