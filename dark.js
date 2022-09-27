document.addEventListener("DOMContentLoaded", () =>{
    let switchElm = document.querySelector(".switch input")
    /*console.log(switchElm)*/
  let setActiveStyleSheet = function(title){
    let css = `link[rel="alternate stylesheet"]`;
    let stylesheets = document.querySelectorAll(css)
    stylesheets.forEach(sheet => sheet.disabled = true);
    let selector = `link[title="${title}"]`;
    let Activesheet = document.querySelector(selector);
    Activesheet.disabled = false;
    localStorage.setItem("theme", title)
  }

  let savedSheet = localStorage.getItem("theme")
  if(savedSheet){
      
      console.log(savedSheet)
    if(savedSheet == 'dark'){
        console.log('yay its dark now')
        console.log(switchElm.checked)
        switchElm.checked = true;
    } 
   
    setActiveStyleSheet(savedSheet)  
  } else{
    setActiveStyleSheet('light')
  }
//setActiveStyleSheet('light')

switchElm.addEventListener('click', function (event){
  if(event.target.checked){
    setActiveStyleSheet('dark')
    
  }else{
    setActiveStyleSheet('light')
  }
})

    }) 
  