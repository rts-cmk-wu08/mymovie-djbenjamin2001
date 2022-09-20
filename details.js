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
         let detailimage = document.createElement("div")
         detailimage.innerHTML = `
   <a href="index.html"><i class="fa-solid fa-arrow-left img-arrow"></i> </a>
        <img class="backdrop__poster" src="${imgPath + data.backdrop_path}" alt="${imgPath + data.backdrop_path}">
         `
         detailhomepage.append(detailimage)

    let detailtextarea = document.createElement("section")
      detailtextarea.innerHTML =`
      <h2>${data.title}</h2>

      <p><i class="fa-solid fa-star imdb-star"></i>${data.vote_average}/10 imdb</p>
      <p>${hours}h : ${minutes}min</p>
     <h2>Description</h2>
     <p>${data.overview}</p>
      `


      detailhomepage.append(detailtextarea)
    
       })
    })