document.addEventListener("DOMContentLoaded", () =>{
    let title = document.createElement("h2")
    let box = document.querySelector(".box")
    let imgPath = "https://image.tmdb.org/t/p/original"
       fetch(" https://api.themoviedb.org/3/movie/popular?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US&page=1")
      
       .then(response => response.json())
       .then(data =>{
           console.log(data)
        
          title.innerHTML = `
          <h2 class="movieheadline">MyMovies</h2>
          `
          document.body.prepend(title)

       

           data.results.forEach(movie => {
          let showing = document.createElement("section")
         showing.classList.add("nowShowing")
      showing.innerHTML = `
      <a href=""><img class="poster" src="${imgPath + movie.poster_path}" alt=""></a>
      <h2 >${movie.title}</h2>
      <p>${movie.vote_average}/10 imdb</p>
      `

      box.append(showing)
           })
         
         
       })
       
       })