const links = [
  { label: "Notes and Questions",        url: "../week11/notes11.html"          },
  { label: "Week 11 Team activity",      url: "../week11/index.html"            },
  { label: "Weather App",                url: "../../weatherApp/weatherApp.html"},
  { label: "Miles App",                  url: "../week11/miles.html"            }

]; 



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