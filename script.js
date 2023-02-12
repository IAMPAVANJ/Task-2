
const changeColorButton = document.getElementById("color-btn");
const childAddButton = document.getElementById('addChild-btn');
const childRemoveButton = document.getElementById("removeChild-btn");
changeColorButton.addEventListener("click",function(){
    let n1 = Math.floor(Math.random()*100)
    let n2 = Math.floor(Math.random()*100)
    let n3 = Math.floor(Math.random()*100)
    let n4 = Math.floor(Math.random()*100)
    document.getElementById('container').setAttribute("style",`background-color: rgba(${n4}, ${n3}, ${n2}, ${n1})`)

})



childAddButton.addEventListener("click",function(){
    document.getElementById("child-container").innerHTML += `<div id="childDiv"></div>`
})

childRemoveButton.addEventListener("click",function(){
  let parent =  document.getElementById("child-container");
  parent.removeChild(parent.lastChild)
  
})
