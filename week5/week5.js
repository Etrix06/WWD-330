const links = [
  { label: "Week 5 Notes and Questions",  url: "notes5.html"},
  { label: "ToDo Project",                url: "ToDo-Project.html"},
  { label: "Group Activity",              url: "week5team.html"}
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

const tasks = [
  
];