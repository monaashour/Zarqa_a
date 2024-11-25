var titles = [
    'Business Owner & FreeLancer',
]
var name = "Mona Ashour"
var responsibilty = "Data Insights, Graphic Design & Product Marketing"

var titlesDiv = document.getElementsByClassName("jobTitlesDiv")[0]
for(var i=0; i<titles.length; i++) {
    var label = document.createElement("label")
    label.innerHTML = titles[i]
    titlesDiv.appendChild(label)
}

var fullname = document.getElementById("fullName")
fullname.innerHTML = name

var responsibiltyP = document.getElementById("responsibiltyP")
responsibiltyP.innerHTML = responsibilty
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save theme preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
