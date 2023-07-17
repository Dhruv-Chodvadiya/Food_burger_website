let images_dt = [
  {
    title: "THE CHICKEN <br> BURGER",
    price: "\u20B9 99",
    MRP: "\u20B9 199",
    calorie: 7845,
    fat: 98,
    protein: 112,
  },
  {
    title: "THE PINK <br> BURGER",
    price: "\u20B9 179",
    MRP: "\u20B9 249",
    calorie: 4512,
    fat: 65,
    protein: 78,
  },
  {
    title: "THE BLACK <br> BURGER",
    price: "\u20B9 149",
    MRP: "\u20B9 199",
    calorie: 6545,
    fat: 115,
    protein: 56,
  },
  {
    title: "THE RED <br> BURGER",
    price: "\u20B9 299",
    MRP: "\u20B9 349",
    calorie: 9845,
    fat: 68,
    protein: 86,
  },
  {
    title: "THE GREEN <br> BURGER",
    price: "\u20B9 249",
    MRP: "\u20B9 349",
    calorie: 1256,
    fat: 45,
    protein: 123,
  },
  {
    title: "THE TORNADO <br> BURGER",
    price: "\u20B9 349",
    MRP: "\u20B9 499",
    calorie: 5678,
    fat: 92,
    protein: 99,
  },
  {
    title: "THE COMBO <br> BURGER",
    price: "\u20B9 499",
    MRP: "\u20B9 598",
    calorie: 3245,
    fat: 49,
    protein: 78,
  },
];

let index = 0;
let len = Array.from(document.getElementsByClassName("main_imgs")).length * 310;
let images_off = () => {
  Array.from(document.getElementsByClassName("main_imgs")).forEach(
    (Element) => {
      Element.style.width = "30%";
      Element.style.filter = "blur(1.5px)";
    }
  );
};

let icon_off = () => {
    Array.from(document.getElementsByClassName("pagi_img")).forEach(
      (Element) => {
        Element.style.transform = "unset";
        Element.style.opacity = ".3";
      }
    );
  };

document
  .getElementsByClassName("bi-chevron-right")[0]
  .addEventListener("click", () => {
    index += 310;
    if (index > len - 310) {
      index = len - 310;
    }
    document.getElementsByClassName("images")[0].scrollLeft = index;
    images_off();
    document.getElementsByClassName("main_imgs")[index / 310].style.width =
      "60%";
    document.getElementsByClassName("main_imgs")[index / 310].style.filter =
      "blur(0px)";
    document.getElementsByClassName("title")[0].innerHTML =
          images_dt[index / 310].title;
    document.getElementsByClassName("price")[0].innerHTML =`${images_dt[(index/310)].price}<sup><del>${images_dt[(index/310)].MRP}</del></sup>`;
      document.getElementById('calorie').innerText = images_dt[(index / 310)].calorie;
      document.getElementById('fat').innerText = images_dt[(index / 310)].fat;
      document.getElementById('protien').innerText = images_dt[(index/310)].protein;
      icon_off();
      document.getElementsByClassName("pagi_img")[(index/310)].style.transform="scale(1.1)"
      document.getElementsByClassName("pagi_img")[(index/310)].style.opacity="1"
  });

  document
  .getElementsByClassName("bi-chevron-left")[0]
  .addEventListener("click", () => {
    index -= 310;
    if (index < 0) {
      index = 0;
    }
    document.getElementsByClassName("images")[0].scrollLeft = index;
    images_off();
    document.getElementsByClassName("main_imgs")[index / 310].style.width =
      "60%";
    document.getElementsByClassName("main_imgs")[index / 310].style.filter =
      "blur(0px)";
    document.getElementsByClassName("title")[0].innerHTML =
          images_dt[index / 310].title;
    document.getElementsByClassName("price")[0].innerHTML =`${images_dt[(index/310)].price}<sup><del>${images_dt[(index/310)].MRP}</del></sup>`;
      document.getElementById('calorie').innerText = images_dt[(index / 310)].calorie;
      document.getElementById('fat').innerText = images_dt[(index / 310)].fat;
      document.getElementById('protien').innerText = images_dt[(index/310)].protein;
      icon_off();
      document.getElementsByClassName("pagi_img")[(index/310)].style.transform="scale(1.1)"
      document.getElementsByClassName("pagi_img")[(index/310)].style.opacity="1"
  });

Array.from(document.getElementsByClassName('pagi_img')).forEach((Element, Number) => {
    Element.addEventListener('click', () => {
        index = 310 * Number;

        document.getElementsByClassName("images")[0].scrollLeft = index;
        images_off();
        document.getElementsByClassName("main_imgs")[index / 310].style.width =
          "60%";
        document.getElementsByClassName("main_imgs")[index / 310].style.filter =
          "blur(0px)";
        document.getElementsByClassName("title")[0].innerHTML =
              images_dt[index / 310].title;
        document.getElementsByClassName("price")[0].innerHTML =`${images_dt[(index/310)].price}<sup><del>${images_dt[(index/310)].MRP}</del></sup>`;
          document.getElementById('calorie').innerText = images_dt[(index / 310)].calorie;
          document.getElementById('fat').innerText = images_dt[(index / 310)].fat;
          document.getElementById('protien').innerText = images_dt[(index/310)].protein;
          icon_off();
          document.getElementsByClassName("pagi_img")[(index/310)].style.transform="scale(1.1)"
          document.getElementsByClassName("pagi_img")[(index/310)].style.opacity="1"
      
    });
}); 
