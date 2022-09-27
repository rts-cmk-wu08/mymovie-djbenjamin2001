document.addEventListener("DOMContentLoaded", () =>{
  let wrapperElm = document.querySelector(".wrapper")
    let params = new URLSearchParams(window.location.search)
    let movie_id = params.get("id")
    let detailhomepage = document.querySelector(".detailhomepage")
    let headerElm = document.createElement("header")
    let imgPath = "https://image.tmdb.org/t/p/original"
    headerElm.classList.add("header")
    headerElm.innerHTML = `
   <a href="index.html"><i class="fa-solid fa-arrow-left img-arrow"></i> </a>
 <label class="switch">
   <input type="checkbox">
   <span class="slider round"></span>
 </label>
    ` 
     wrapperElm.append(headerElm)


       fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en`)
       .then(response => response.json())
       .then(data =>{
           console.log(data)
           let hours = Math.floor(data.runtime/60)  
           let minutes = data.runtime % 60
         let detailimage = document.createElement("div")
         detailimage.innerHTML = `
        <img class="backdrop__poster" src="${imgPath + data.backdrop_path}" alt="${imgPath + data.backdrop_path}">
         `
         detailhomepage.append(detailimage)

    let detailtextarea = document.createElement("section")
    detailtextarea.classList.add("detailtextarea")
      detailtextarea.innerHTML =`
      <h2>${data.title}</h2>
       <p><i class="fa-solid fa-star imdb-star"></i>${data.vote_average.toFixed(1)}/10 imdb</p>
      <div class="detailgenre"></div>
      <div class="info">
      <p>${hours}h : ${minutes}min</p>
      <p>${data.release_date.split("-")[0]}</p>
      <p>${data.spoken_languages[0].name}</p>
    </div>
      <div class="description">
     <h2>Description</h2>
     <p>${data.overview}</p>
     </div>
     <div class="cast">
      <h2>Cast</h2>
      <section class="castsection">
        
      </section>
     </div>
      `
      detailhomepage.append(detailtextarea)

let datagenreElm = document.querySelector(".detailgenre")
console.log(datagenreElm)

data.genres.forEach(genres => {
  let genreData = document.createElement("p")
  genreData.innerText = genres.name

  datagenreElm.append(genreData)
})
      
    
      
      
      let detailCast = document.querySelector(".castsection")
       fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US`)
       .then(response => response.json())
       .then(data =>{
console.log(data)

data.cast.forEach(cast => {

let detailcastSection = document.createElement("div")
detailcastSection.src = cast.profile_path ? `${imgPath}${cast.profile_path}`: "/pngwing.com.png"
detailcastSection.innerHTML= `
<img src="${cast.profile_path ? `${imgPath}${cast.profile_path}`: "/pngwing.com.png"}" alt="cast.name">
<p>${cast.name}</p>
`
detailCast.append(detailcastSection)
})

  })
       })
    }) 
  