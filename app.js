document.addEventListener("DOMContentLoaded", () =>{
   let wrapperElm = document.querySelector(".wrapper")
    let nowshowing = document.querySelector(".nowshowing")
    let popular = document.querySelector(".popular")
    let footerwrapperElm = document.querySelector(".footerwrapper")
    let imgPath = "https://image.tmdb.org/t/p/original"
       fetch(" https://api.themoviedb.org/3/movie/popular?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US&page=3")
      
       .then(response => response.json())
       .then(data =>{
        
           console.log(data)
        let headerElm = document.createElement("header")
        headerElm.classList.add("header")
       headerElm.innerHTML = `
       <h2>MyMovies</h2>
       <button>switch</button>
       `
      wrapperElm.append(headerElm)
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
      <a href="detail.html?id=${movie.id}"><img class="poster" src="${imgPath + movie.poster_path}" alt=""></a>
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
        <a href="detail.html?id=${movie.id}"><img class="poster--popular" src="${imgPathPopular + movie.poster_path}" alt=""></a>
        <div class="popularmovie__text">
        <h2 >${movie.title}</h2>
        <p><i class="fa-solid fa-star imdb-star"></i>${movie.vote_average}/10 imdb</p>
        <p class="genres"></p>
        </div>
        ` 
        popularMovies.append(showingpopular)

        let footerElm = document.createElement("footer")
        footerElm.classList.add("footer")
        footerElm.innerHTML = `
        <h2>MyMovies</h2>
        <button>switch</button>
        `
         footerwrapperElm.append(footerElm)

 
  let genreElm = showingpopular.querySelector(".genres")
movie.genre_ids.forEach(id =>{
   let currentGenre =  genres.find(genre => genre.id == id)
   let genreSpan = document.createElement("span")
   genreSpan.classList.add("genre__tag")
   genreSpan.innerText = currentGenre.name
   genreElm.append(genreSpan)
})


             })
         
           })
         
         
       })
     
