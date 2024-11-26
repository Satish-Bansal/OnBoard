$(document).ready(function () {
    $(".mobile-nav-items").hide()
    $(".bx-x").hide()


    $(".bx-menu-alt-right").click(function () {
        $(".mobile-nav-items").show()
        $(".bx-x").show()
        $(".bx-menu-alt-right").hide()
        $(".mobile-main-line").css({
            "border-bottom":"2px solid black",
        })
    })

    $(".bx-x").click(function () {
        $(".mobile-nav-items").hide()
        $(".bx-x").hide()
        $(".bx-menu-alt-right").show()
        $(".mobile-main-line").css({
            "border-bottom":"none",
        })
    })

    $(".mobile-nav-items ul li a").click(function(){
        $(".mobile-nav-items").hide()
        $(".bx-x").hide()
        $(".bx-menu-alt-right").show()
        $(".mobile-main-line").css({
            "border-bottom":"none",
        })
    })
})

let lastScrollPosition = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down, hide the navbar
    navbar.classList.add('hidden');
  } else {
    // Scrolling up, show the navbar
    navbar.classList.remove('hidden');
  }

  lastScrollPosition = currentScrollPosition;
});
