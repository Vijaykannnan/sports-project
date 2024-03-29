const toggler = document.querySelector(".fa-bars");
let body = document.querySelector("body");
let banner = document.querySelector(".banner");
const navbarMenus = document.querySelector(".navbar__menus ul");

toggler.onclick = function () {
  if (this.className == "fa fa-bars") {
    navbarMenus.style = "left:20%";
    this.className = "fa fa-times";
    banner.style = "filter:blur(20px)";
  } else if (this.className == "fa fa-times") {
    navbarMenus.style = "left:-80%";
    this.className = "fa fa-bars";
    banner.style = "filter:blur(0px)";
  }
};

//--------------------- End Navbar---------------------------

//--------------------- category---------------------------

let category = document.querySelector(".category");
let items = [
  {
    id: 1,
    img: "./img/soccer-gcc763b6fb_1920.jpg",
    content:
      "This game was developed by us,please be participate an tournment an win the case price,if you can cheat or using clone aps your account has suspended.All amount transfer into 24 hours",
  },
  {
    id: 2,
    img: "./img/badminton-gbe2d60b4e_1920.jpg",
    content:
      "This game was developed by us,please be participate an tournment an win the case price,if you can cheat or using clone aps your account has suspended.All amount transfer into 24 hours",
  },
  {
    id: 3,
    img: "./img/cyclists-g68c8d61a6_1920.jpg",
    content:
      "This game was developed by us,please be participate an tournment an win the case price,if you can cheat or using clone aps your account has suspended.All amount transfer into 24 hours",
  },
  {
    id: 4,
    img: "./img/volleyball-g0a47a8b97_1920.jpg",
    content:
      "This game was developed by us,please be participate an tournment an win the case price,if you can cheat or using clone aps your account has suspended.All amount transfer into 24 hours",
  },
  {
    id: 5,
    img: "./img/athlete-g4543884e6_1920.jpg",
    content:
      "This game was developed by us,please be participate an tournment an win the case price,if you can cheat or using clone aps your account has suspended.All amount transfer into 24 hours",
  },
  {
    id: 6,
    img: "./img/chess.jpg",
    content:
      "This game was developed by us,please be participate an tournment an win the case price,if you can cheat or using clone aps your account has suspended.All amount transfer into 24 hours",
  },
];

let valueItems = items.map(function (val) {
  let finalVal = `<div class="col-md-4 col-lg-3 card">
          <div class="card-body">
            <img src=${val.img} class="img-fluid" alt="sports" />
            <p>
            ${val.id} -
            ${val.content}
            </p>
            <button>read more</button>
          </div>
        </div>`;
  return finalVal;
});

let categoryInside = document.querySelector("#category");
// console.log(valueItems);
categoryInside.querySelector(".row").innerHTML += valueItems;
// ;

//--------------------- members counters---------------------------

window.addEventListener("scroll", function (val) {
  // console.dir(val.target.scrollingElement);
  // console.log(window.scrollY);
  // console.log(val);
  // console.log(val.path[1].scrollY);
  if (val.path[1].scrollY >= 2000) {
    let allCounter = document.querySelectorAll(".counter");
    let speed = 1000;


    // console.log("loggeed");
    // if (val === 610) {
    // console.log(window.scrollY);

    allCounter.forEach(function (counting) {
      // console.log(counting);
      let update = () => {
        let target = +counting.getAttribute("data-final");
        let innerData = +counting.innerText;
        let inc = target / speed;
        // console.log(inc);

        if (innerData < target) {
          // console.log(innerData + inc);
          counting.innerText = innerData + inc;
          setTimeout(update, 60);
        } else {
          counting.innerText = target;
        }
      };

      update();
    });
  }
});
