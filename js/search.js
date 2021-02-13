const navSearch = document.getElementById("navSearch")
const navInput = document.getElementById("player")

navSearch.onsubmit = event => {
    event.preventDefault();
    if(navInput.value) window.location.href = `stats.html?player=${navInput.value}`;
}
