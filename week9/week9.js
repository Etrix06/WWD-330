const links = [
  { label: "Notes and Questions",                url: "../week9/notes9.html" },
  { label: "Drum Kit",                url: "../week9/practice9.html"}

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

const popup = window.open('https://www.google.com','Google','width=400,height=400,resizable=yes');

function openPopUp() {
  window.open('https://www.google.com','Google','width=400,height=400,resizable=yes');
}