const values = [{href: "index.html", text: "<p></p>Work", src: ""},
  {href: "item01.html", text: "<p>2019</p>Game Banners and Splashscreens", src: "../images/work/W1L.jpg"},
  {href: "item02.html", text: "<p>2019</p>Game Backgrounds (Adobe Photoshop)", src: "../images/work/W1R.jpg"},
  {href: "item03.html", text: "<p>2017</p>Game Items Concept art", src: "../images/work/W2L.png"},
  {href: "item04.html", text: "<p>2021</p>App icons designe", src: "../images/work/W2R.png"},
  {href: "item05.html", text: "<p>2019</p>Game Icons designe", src: "../images/work/W3L.jpg"},
  {href: "item06.html", text: "<p>2019</p>Solitaire Game Art", src: "../images/work/W3R.jpg"},
  {href: "item07.html", text: "<p>2014</p>Characters design", src: "../images/work/W4L.jpg"},
  {href: "item08.html", text: "<p>2010</p>Items for mobile games", src: "../images/work/W4R.png"},
  {href: "item09.html", text: "<p>2017</p>Designe of environment, set dressing", src: "../images/work/W5L.png"},
  {href: "item10.html", text: "<p>2021</p>Project Gates of War (Plarium)", src: "../images/work/W5R.png"},
  {href: "item11.html", text: "<p>2011</p>Illustrations, storyboards", src: "../images/work/W6L.png"},
  {href: "item12.html", text: "<p>2009</p>Art for Commercials", src: "../images/work/W6R.png"},
  {href: "item13.html", text: "<p>2020</p>Personal Art Projects (Scetches, watercolor paintings)", src: "../images/work/W7L.png"},
  {href: "item14.html", text: "<p>2011</p>Farm game (concept art)", src: "../images/work/W7R.png"},
  {href: "item15.html", text: "<p></p>Contact", src: ""}];

  function setLinks(doc,i) {
    // navLinks
    let liEls = '';
    let ii = 0;
    for (const itr of values) {       
        is_active = "";
        if(ii==i){
            is_active = "active";
        }
        href = itr.href;
        item_txt = itr.text.split("</p>")[1];
        liEls = liEls + '<li class="nav-item">'+
        `<a class="nav-link ${is_active}" href="${href}">${item_txt}</a></li>`;
        ii = ii + 1;
    }
    doc.getElementById("navLinks").innerHTML = liEls;
    // console.log(liEls);
    // console.log("Values length: "+values.length);
  }
  
  function setIdxImages(doc) {
    const LEN = values.length-1; // LEN must be even!
    let idx_images_txt = "";
    // console.log("Put inner HTML");

    for (let i = 1; i < LEN; i+=2) {
      let src1 = values[i].src;
      let href1 = values[i].href;
      let text1 = values[i].text;
      let src2 = values[(i+1)].src;
      let href2 = values[(i+1)].href;
      let text2 = values[(i+1)].text;

      idx_images_txt = idx_images_txt + 
      '<div class="row">'+
      '<div class="col pr-1 container">'+
      `<img src="${src1}" alt="Avatar" class="card-img-top">`+
      '<div class="overlay">'+
      `<a class="text" href="${href1}">`+
      `<span>${text1}</span>`+
      '</a></div></div>'+
      '<div class="col pl-0 container">'+
      `<img src="${src2}" alt="Avatar" class="card-img-top">`+
      '<div class="overlay">'+
      `<a class="text" href="${href2}">`+
      `<span>${text2}</span>`+
      '</a></div></div></div>'; 
      // console.log(""+i+", "+(i+1));     
    }

    doc.getElementById("twoColumnsImgs").innerHTML = idx_images_txt;
    // console.log(idx_images_txt);
    
  }

