document.addEventListener("DOMContentLoaded", () =>{
    let params = new URLSearchParams(window.location.search)
    let movie_id = params.get("id")
    let detailhomepage = document.querySelector(".detailhomepage")
    let imgPath = "https://image.tmdb.org/t/p/original"
       fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en`)
       .then(response => response.json())
       .then(data =>{
           console.log(data)
           let hours = Math.floor(data.runtime/60)  
           let minutes = data.runtime % 60
         let detailimage = document.createElement("section")
         detailimage.innerHTML = `
   <a href="index.html"><i class="fa-solid fa-arrow-left img-arrow"></i> </a>
        <img class="backdrop__poster" src="${imgPath + data.backdrop_path}" alt="${imgPath + data.backdrop_path}">
         `
         detailhomepage.append(detailimage)

    let detailtextarea = document.createElement("section")
    detailtextarea.classList.add("detailtextarea")
      detailtextarea.innerHTML =`
      <h2>${data.title}</h2>
       <p><i class="fa-solid fa-star imdb-star"></i>${data.vote_average}/10 imdb</p>
      <div class="detailgenre"></div>
      <p>${hours}h : ${minutes}min</p>
      <p>${data.release_date}</p>
      <div class="description">
     <h2>Description</h2>
     <p>${data.overview}</p>
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
      
    
       })
       fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US`)
       .then(response => response.json())
       .then(data =>{
console.log(data)
let detailcastSection = document.createElement("section")
detailcastSection.classList.add("Castsection")
       })
    })