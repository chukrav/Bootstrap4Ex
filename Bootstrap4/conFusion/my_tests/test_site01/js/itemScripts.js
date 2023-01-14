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


function setSideNavigat(doc, values) {
    // doc.getElementById("sidebarLinks").setAttribute("src", values.banners[0].src);
    // doc.getElementById("left-ban").setAttribute("href", values.banners[0].href);
    // doc.getElementById("sidebarLinks").innerHTML = values.banners[0].text; 
    // doc.getElementById("imf-2").setAttribute("src", values.banners[1].src);
    // doc.getElementById("right-ban").setAttribute("href", values.banners[1].href);
    // doc.getElementById("overlay-txt-right").innerHTML = values.banners[1].text;
    
    let linksStr = '';
    for (let itm of values) {
    linksStr = linksStr + '<li class="nav-item">'+
        '<a class="nav-link" href="'+itm.href+
        '">'+itm.text.split("</p>")[1]+
        '</a></li>';
    }
    doc.getElementById("sidebarLinks").innerHTML = linksStr;
  }