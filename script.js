
const changeColorButton = document.getElementById("color-btn");
const childAddButton = document.getElementById('addChild-btn');
const childRemoveButton = document.getElementById("removeChild-btn");
let count = 0;
changeColorButton.addEventListener("click",function(){
    let n1 = Math.floor(Math.random()*100)
    let n2 = Math.floor(Math.random()*20)
    let n3 = Math.floor(Math.random()*15)
    document.getElementById('container').setAttribute("style",`background-color: rgb(${n1}, ${n2}, ${n3}`)
})



childAddButton.addEventListener("click",function(){
    count++;
    document.getElementById("child-container").innerHTML += `<div id="childDiv">${count}</div>`
})

childRemoveButton.addEventListener("click",function(){
    count--;
  let parent =  document.getElementById("child-container");
  parent.removeChild(parent.lastChild)
  
})
