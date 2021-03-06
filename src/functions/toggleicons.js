export default function toggleIcons() {
  let menu = document.getElementsByName("menu");
  let btnProductos = document.getElementById("btnProductos");
  let backBtn = document.getElementById("backBtn");
  let navSpanItems = document.getElementsByName("primary-span-item");
  let navSVGItems = document.getElementsByClassName("primary-svg");
  let navSpanSubItems = document.getElementsByName("secondary-span-item");
  let navSVGSubItems = document.getElementsByClassName("secondary-svg");
  let liPrimary = document.getElementsByName("li-primary");
  let liSecondary = document.getElementsByName("li-secondary");

  btnProductos.value = 1;

  menu[0].addEventListener("click", function (e) { 
    e.preventDefault();
    toggleIcons();
  });

  menu[1].addEventListener("click", function (e) {
    e.preventDefault();
    toggleIcons();
  });

  function toggleIcons() {
    if (backBtn.value === 1) {
      for (let i = 0; i < navSpanSubItems.length; i++) {
        navSpanSubItems[i].setAttribute("class", "fadeOutRight");
      }
      for (let i = 0; i < navSVGSubItems.length; i++) {
        navSVGSubItems[i].setAttribute("class", "secondary-svg fadeOutLeft");
      }

      for (let i = 0; i < navSpanItems.length; i++) {
        navSpanItems[i].setAttribute("class", "fadeInRight");
      }

      for (let i = 0; i < navSVGItems.length; i++) {
        navSVGItems[i].setAttribute("class", "primary-svg fadeInLeft");
      }

      setTimeout(function () {
        for (let i = 0; i < liPrimary.length; i++) {
          liPrimary[i].style.display = "block";
        }

        for (let i = 0; i < liSecondary.length; i++) {
          liSecondary[i].style.display = "none";
        }

        btnProductos.value = 1;
        backBtn.value = 0;
      }, 500);
    }

    if (btnProductos.value === 1) {
      for (let i = 0; i < navSpanItems.length; i++) {
        navSpanItems[i].setAttribute("class", "fadeOutRight");
      }
      for (let i = 0; i < navSVGItems.length; i++) {
        navSVGItems[i].setAttribute("class", "primary-svg fadeOutLeft");
      }

      for (let i = 0; i < navSpanSubItems.length; i++) {
        navSpanSubItems[i].setAttribute("class", "fadeInRight");
      }
      for (let i = 0; i < navSVGSubItems.length; i++) {
        navSVGSubItems[i].setAttribute("class", "secondary-svg fadeInLeft");
      }
      setTimeout(function () {
        for (let i = 0; i < liSecondary.length; i++) {
          liSecondary[i].style.display = "block";
        }

        for (let i = 0; i < liPrimary.length; i++) {
          liPrimary[i].style.display = "none";
        }

        btnProductos.value = 0;
        backBtn.value = 1;
      }, 500);
    }
  }
}
