var index = 0;

var locations = [
  { display: "ELO Bot: Pending Score Request", asset: "img/gallery/1.png" }, 
  { display: "ELO Bot: Queue Filling", asset: "img/gallery/2.png" },
  { display: "ELO Bot: Team Picking", asset: "img/gallery/3.png" },
  { display: "Statsify (Hypixel Stat Bot): Ping", asset: "img/gallery/4.png" },
  { display: "Bot Application Showcase", asset: "img/gallery/5.png" },
  { display: "General Bot: Quick Math", asset: "img/gallery/6.png" },
  { display: "ELO Bot: Accepted Score Request", asset: "img/gallery/7.png" },
  { display: "Statsify (Hypixel Stat Bot): Bedwars Profile Command", asset: "img/gallery/8.png" },
  { display: "ELO Bot: Profile Command",  asset: "img/gallery/9.png" },
]

for (i = 0; i < locations.length; i++) $("#dotsContainer").append(`<span onclick="showSlide(${i})" class="dots"></span>`)
showSlide(0);

function showSlide(position) {
  if (position > locations.length - 1) index = 0;
  else if (position < 0) index = locations.length - 1;
  else index = position;

  for (i = 0; i < locations.length; i++) $(".dots").eq(i).removeClass("active")
  $(".dots").eq(index).addClass("active")

  const location = locations[index]

  $(".slide").attr("src", location.asset)
  $("#text-bar").find("a").html(location.display)
  
  if(location.url) $("#text-bar").find("a").attr("href", location.url)
  else $("#text-bar").find("a").removeAttr("href")
}

$("#next").on("click", function() {
  index += 1;
  showSlide(index);
})

$("#previous").on("click", function() {
  index -= 1;
  showSlide(index);
})