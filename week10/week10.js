const links = [
  { label: "Notes and Questions",                url: "../week10/notes10.html"          },
  { label: "Quakes - Week 10 Team activity",     url: "../week10/team10/index.html"        },
  { label: "Weather App",                        url: "https://etrix06.github.io/WWD-330/weatherApp/weatherApp.html"}

]; 

//<a href="../"></a>

function addToIndex() {
    for (let i = 0; i < links.length; i++ ) {
      var a = document.createElement("a");
      var linkText = document.createTextNode(links[i].label);
      a.appendChild(linkText);
      a.title = "This is the " + links[i].label + " link";
      a.href = links[i].url;
      var y = document.createElement("LI");
      y.appendChild(a);
      document.getElementById("indexList").appendChild(y);
    }
}