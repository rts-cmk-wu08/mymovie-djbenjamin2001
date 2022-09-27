document.addEventListener("DOMContentLoaded", () =>{
   let wrapperElm = document.querySelector(".wrapper")
   let popularPage = 1
    let nowshowing = document.querySelector(".nowshowing")
    let popular = document.querySelector(".popular")
    let footerwrapperElm = document.querySelector(".footerwrapper")

    let imgPath = "https://image.tmdb.org/t/p/original"

    let headerElm = document.createElement("header")
    headerElm.classList.add("header")
   headerElm.innerHTML = `
   <h2>MyMovies</h2>
<label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
   `
   wrapperElm.append(headerElm)

       fetch(" https://api.themoviedb.org/3/movie/popular?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US&page=1")
      
       .then(response => response.json())
       .then(data =>{
        
           console.log(data)
   
      
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


       let popularHeadline = document.createElement("div")
       popularHeadline.classList.add("popularheadline")
        popularHeadline.innerHTML = `<h2>Popular</h2>
        <button>see more</button>
        `
      popular.append(popularHeadline)
      
       function fetchPopular(page){
       fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2c8fc77b797cdf943cad63314a45daa4&page=${page}`)
       .then(response => response.json())
       .then(data =>{
        let imgPathPopular = "https://image.tmdb.org/t/p/original"
           console.log(data)
          
         
         
          let popularMovies = document.createElement("div")
          popularMovies.classList.add("showingpopular")
          popular.append(popularMovies)


          data.results.forEach((movie, index) => {
            let showingpopular = document.createElement("article")
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


 
  let genreElm = showingpopular.querySelector(".genres")
movie.genre_ids.forEach(id =>{
   let currentGenre =  genres.find(genre => genre.id == id)
   let genreSpan = document.createElement("span")
   genreSpan.classList.add("genre__tag")
   genreSpan.innerText = currentGenre.name
   genreElm.append(genreSpan)

})

if (index === 18){
   const intersectionObserver = new IntersectionObserver((entries) => {
      // If intersectionRatio is 0, the target is out of view
      // and we do not need to do anything.
      if (entries[0].intersectionRatio <= 0) return;
    
     
      popularPage++;
      console.log('items in viewport');
      fetchPopular(popularPage)
      intersectionObserver.unobserve(showingpopular)
     
    });
    intersectionObserver.observe(showingpopular);
}

             })
             
            
     
           })
         
         }
         fetchPopular(popularPage)
         let footerElm = document.createElement("footer")
         footerElm.classList.add("footer")
         footerElm.innerHTML = `
         <i class="fa-solid fa-bookmark"></i>
         <i class="fa-solid fa-ticket"></i>
         <i class="fa-solid fa-film"></i>
         `
          footerwrapperElm.append(footerElm)

       })
      
