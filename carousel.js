$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayspeed: 1000,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})


//
var myLoader;
function loader() {
    myLoader = setTimeout(showPage, 1000)
}

function showPage() {
    document.querySelector(".center-container").style.display = "none";
    document.getElementById("container-main").style.display = "block";
}
// window.onload = function() {
//     // Page has finished loading, hide the loading spinner and show the content
//     document.querySelector(".center-container").style.display = "none";
//   };