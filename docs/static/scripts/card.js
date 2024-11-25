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
