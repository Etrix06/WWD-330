const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html"
  }
] 

function myFunction() {
  document.getElementById("jsTest").innerHTML="This is a test to see if my js file is working.";
}

function makeLinkList() {
  document.getElementById("indexList").innerHTML= links;
}

