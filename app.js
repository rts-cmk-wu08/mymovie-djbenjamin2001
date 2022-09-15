document.addEventListener("DOMContentLoaded", () =>{
    let title = document.createElement("header")
    let nowshowing = document.querySelector(".nowshowing")
    let popular = document.querySelector(".popular")
    let imgPath = "https://image.tmdb.org/t/p/original"
       fetch(" https://api.themoviedb.org/3/movie/popular?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US&page=1")
      
       .then(response => response.json())
       .then(data =>{
           console.log(data)
        
          title.innerHTML = `
          <h2 class="movieheadline">MyMovies</h2>
          `
          document.body.prepend(title)


          //section 1 start
       let nowshowingHeadline = document.createElement("div")
       nowshowingHeadline.classList.add("nowshowingheadline")
        nowshowingHeadline.innerHTML = `<h1>now showing</h1>
        <button>see more</button>
        `
      nowshowing.append(nowshowingHeadline)

let nowshowingMovies = document.createElement("div")
nowshowingMovies.classList.add("nowshowingmovies")
nowshowing.append(nowshowingMovies)


           data.results.forEach(movie => {
          let showing = document.createElement("section")
         showing.classList.add("nowShowing")
      showing.innerHTML = `
      <a href=""><img class="poster" src="${imgPath + movie.poster_path}" alt=""></a>
      <h2 >${movie.title}</h2>
      <p><i class="fa-solid fa-star imdb-star"></i>${movie.vote_average}/10 imdb</p>
      `

      nowshowingMovies.append(showing)
           })
         
         
       })
       //section 1 end
       
       fetch(" https://api.themoviedb.org/3/movie/popular?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US&page=2")
       .then(response => response.json())
       .then(data =>{
        let imgPathPopular = "https://image.tmdb.org/t/p/original"
           console.log(data)
          
           let popularHeadline = document.createElement("div")
           popularHeadline.classList.add("popularheadline")
            popularHeadline.innerHTML = `<h2>Popular</h2>
            <button>see more</button>
            `
          popular.append(popularHeadline)
         
          let popularMovies = document.createElement("div")
          popularMovies.classList.add("showingpopular")
          popular.append(popularMovies)


          data.results.forEach(movie => {
            let showingpopular = document.createElement("section")
           showingpopular.classList.add("popularmovies")
        showingpopular.innerHTML = `
        <a href=""><img class="poster--popular" src="${imgPathPopular + movie.poster_path}" alt=""></a>
        <div class="popularmovie__text">
        <h2 >${movie.title}</h2>
        <p><i class="fa-solid fa-star imdb-star"></i>${movie.vote_average}/10 imdb</p></div>
        `
  popularMovies.append(showingpopular)
     
             })
         
           })
         
         
       })
     
       