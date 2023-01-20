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
  let idx = parseInt(id.split("-")[1]) - 1;
  let idm = "imm-" + idx;
  cleanAttributes();
  const elt = document.getElementById(idm);
  elt.parentElement.setAttribute("class", "carousel-item active"); 
  toggleCarousel();
}

// for (let img of imgs) {        
//     if(img.id.includes("imb")){
//      img.addEventListener("click", imagePressed);
//     }
//     // img.addEventListener("click", imagePressed);
// }


function toggleCarousel(){
  $("#myModal").modal('toggle'); //see here usage
};

function setBanners(doc, values) {
  doc.getElementById("imf-1").setAttribute("src", values.banners[0].src);
  doc.getElementById("left-ban").setAttribute("href", values.banners[0].href);
  doc.getElementById("overlay-txt-left").innerHTML = values.banners[0].text; 
  doc.getElementById("imf-2").setAttribute("src", values.banners[1].src);
  doc.getElementById("right-ban").setAttribute("href", values.banners[1].href);
  doc.getElementById("overlay-txt-right").innerHTML = values.banners[1].text;
}

function setImages(doc, values) {
  // const imgs = doc.getElementsByTagName("img");
  // console.log("imgs count: " + imgs.length);
  let i = 0;
  let icorrect = true;
  for (let img of imgs) {
    // console.log(img.id);
    if (img.id.includes("imb")) {
      img.addEventListener("click", imagePressed);
      img.setAttribute("src", values.images[i]);
      i = i + 1;
    }

    if (img.id.includes("imm")) {
      if ((i > 0) & (icorrect === true)) {
        i = 0;
        icorrect = false;
        // console.log("------ i = 0 -------- ");
      }
      img.setAttribute("src", values.images[i]);
      i = i + 1;
    }
  }
}

  //  <div>
  //     <img id="imb-1" src="image-1" alt="Avatar"
  //       class="card-img-top zoom-in">
  //   </div> 
function setImagesInn(doc, values) {
  let right_images = "";
  let LEN = values.images.length;
  for (let i = 0; i<LEN; i++) {
    let src = values.images[i];
    right_images = right_images +
    `<div><img id="imb-${i+1}" src="${src}" alt="Avatar"`+
    'class="card-img-top zoom-in"></div>';    
  }
  doc.getElementById("right_images").innerHTML = right_images;
}


function setCarouseleInds(doc, img_ref){
  // carousel_inds
  const LEN = img_ref.images.length;
  let liEls = '<li data-target="#demo" data-slide-to="0" class="active"></li>';
  for(let i = 1; i<LEN; i++){
    liEls = liEls + `<li data-target="#demo" data-slide-to="${i}"></li>`;
  }
  doc.getElementById("carousel_inds").innerHTML = liEls;
}

// slideshow_cont
function setSlideShow(doc, img_ref){  
  const LEN = img_ref.images.length;
  let srcEls = "";
  for(let i = 0; i<LEN; i+=1){
    let src_txt = img_ref.images[i];
    srcEls = srcEls + '<div class="carousel-item">'+
    `<img id="imm-${i}" src="${src_txt}" alt="Avatar" class="card-img-top"></div>`;
  }
  doc.getElementById("slideshow_cont").innerHTML = srcEls;
}