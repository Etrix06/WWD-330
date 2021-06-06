const links = [
  { label: "Notes and Questions",                url: "../week7/notes7.html" },
  { label: "Practice Page      ",                url: "../week7/practice7.html"}

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

const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

textButton.addEventListener('click', () => {
  fetch(textURL)
  .then( response => {
      outputDiv.innerHTML = 'Waiting for response...';
  if(response.ok) {
      return response;
  }
      throw Error(response.statusText);
  })
  .then( response => response.text() )
  .then( text => outputDiv.innerText = text )
  .catch( error => console.log('There was an error:', error))
},false);

apiButton.addEventListener('click', () => {
  fetch(apiURL)
  .then( response => {
      outputDiv.innerHTML = 'Waiting for response...';
  if(response.ok) {
      return response;
  }
  throw Error(response.statusText);
  })
  .then( response => response.json() )
  .then( data => outputDiv.innerText = data.value )
  .catch( error => console.log('There was an error:', error))
},false);

const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };
const james = { name: 'James. James Bond'};

function hello() {
  document.getElementById("hello").innerHTML = sayHello.call(bruce, 'How do you do');
}

function sayHello(greeting='Hello') {
  return `${ greeting }, my name is ${ this.name}`;
}

