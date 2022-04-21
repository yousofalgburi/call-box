let slideIndex = 1
currentSlide(slideIndex)

function moveSlide(n) {
  currentSlide((slideIndex += n))
}

function currentSlide(n) {
  let slideShow = document.querySelectorAll(".slide_item")

  if (n > slideShow.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slideShow.length
  }

  slideShow.forEach(function (item) {
    item.style.display = "none"
  })

  slideShow[slideIndex - 1].style.display = "block"
}
