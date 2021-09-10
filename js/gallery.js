var index = 0;
const childrenCount = $("#slide-container > img").length - 1

function showSlide(position) {
  index = position;

  $(".dots").each(function (i) {
    if(i == index) $(this).addClass("active")
    else $(this).removeClass("active")
  })

  $("#slide-container > .slide").each(function (i) { 
    if(i == index) {
      $(this).css("display", "block")
      $("#text-bar").find("a").html($(this).attr("alt"))
    } else {
      $(this).css("display", "none")
    }
  })
}

for (i = 0; i <= childrenCount; i++) $("#dotsContainer").append(`<span onclick="showSlide(${i})" class="dots"></span>`)
showSlide(0)

$("#next").on("click", function() {
  if(index == childrenCount) index = 0
  else index += 1;
  showSlide(index)
});

$("#previous").on("click", function() {
  if(index == 0) index = childrenCount
  else index -= 1;
  showSlide(index)
});