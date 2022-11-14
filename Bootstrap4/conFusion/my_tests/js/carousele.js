// const imgs = document.getElementsByTagName("img");
    
const cleanAttributes = () => {
  for (let img of imgs){
    if(img.id.includes("imm")){
      // img.parentElement.removeAttribute("class");
      img.parentElement.setAttribute("class", "carousel-item");
    }        
  }      
}
    

const imagePressed = e => {
  let id = e.target.id;
  let idm = "imm-" + id.split("-")[1];
  cleanAttributes();
  const elt = document.getElementById(idm);
  elt.parentElement.setAttribute("class", "carousel-item active");
  
  console.log(id);
  toggleCarousel();
}

for (let img of imgs) {        
    if(img.id.includes("imb")){
     img.addEventListener("click", imagePressed);
    }
    // img.addEventListener("click", imagePressed);
}


function toggleCarousel(){
  $("#myModal").modal('toggle'); //see here usage
};