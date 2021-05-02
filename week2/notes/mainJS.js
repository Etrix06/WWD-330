for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

function smallestNumber(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(smallestNumber(12, 45));

function isEven(number) {
  if (number == 0) return true;
  else if (number == 1) return false;
  else if (number < 0) return isEven(-number);
  else return isEven(number - 2); //this recursion is a
  //function within a function.  It will loop within itself
  //until the number either reaches 0 or 1.  or if the number
  //is negative.  Then it will make the number positive, then
  //do the recursion function until it gets it down to 1 or 0.
}

console.log(isEven(-31));

const links = [
  { label: "Week 1", url: "week1/week1.html"},
  { label: "Week 2", url: "week2/week2.html"}
];
console.log(links);
console.log(links[1].url);
console.log(links.length);

function addToIndex(){
  //console.log(links[1].url + " It works until here.");
  for (let i = 0; i < links.length; i++ ) {
    var a = document.createElement("a");
    //console.log(links[i].label);
    var linkText = document.createTextNode(links[i].label);
    a.appendChild(linkText);
    a.title = "This is the " + links[i].label + "link";
    a.href = links[i].url;
    var y = document.createElement("LI");
    y.appendChild(a);
    document.getElementById("indexList").appendChild(y);
  }

}