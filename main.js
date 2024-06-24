const menubtn = document.querySelector("#menuButton")
const list = document.querySelector("#list")
const closeBtn = document.querySelector("#close")

menubtn.addEventListener("click", function(){
    list.style.display = "flex"
    menubtn.style.display = "none"
    closeBtn.style.display = "block"
})

closeBtn.addEventListener("click", function(){
  list.style.display = "none"
  menubtn.style.display = "flex"
  close.style.display = "none"
})
