const results = document.querySelector("#results")
// ======> POST request
const signUp = (event) => {
  event.preventDefault()
  const emailValue = document.getElementById("email").value
  const passwordValue = document.getElementById("password").value
  fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"email": emailValue, "password": passwordValue})
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })
}
const formPost = document.querySelector("#form")
formPost.addEventListener("submit", signUp)


// ====> GET Request
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

searchMovie("Harry Potter")
