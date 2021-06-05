const links = [
  { label: "Week 1",  url: "week1/week1index.html"},
  { label: "Week 2",  url: "week2/week2index.html"},
  { label: "Week 3",  url: "week3/week3index.html"},
  { label: "Week 4",  url: "week4/week4Index.html"},
  { label: "Week 5",  url: "week5/week5Index.html"},
  { label: "Week 6",  url: "week6/week6Index.html"},
  { label: "Week 7",  url: "week7/week7Index.html"}
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

