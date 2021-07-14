class Fetch {
  async getCurrentCity(city) {
    const myKey = "b289d6d45af893f5469e8c958107b6d7";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);
   

    return data;
  }
}
//UI is now Display
class Display {
  constructor() {
    //uiContainer is now display
    this.display = document.getElementById("display");
    //this.city;
    //this.defaultCity = "Rexburg";
  }

  displayData(data) {
    //console.log("Default city is - " + this.defaultCity);
    this.display.innerHTML = `
        
        <div>
            <div>
                <h3>${data.city.name}, ${data.city.country}</h3>
                <h3>${data.list[0].main.temp}°F<h3>
                
                <h4>Highs of ${data.list[0].main.temp_max}°F. <br> Lows of ${data.list[0].main.temp_min}°F</h4>
                <p>Weather conditions are described as: <br><span class="description">${data.list[0].weather[0].description}</span></p>
                
            </div>
        </div>
        
        `;
  }
/*
  clearUI() {
    uiContainer.innerHTML = "";
 
  }

  saveToLocalStorage(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLocalStorage() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  } */
}

class Display5days {
  constructor() {
    //uiContainer is now display
    this.display = document.getElementById("display");
    //this.city;
    //this.defaultCity = "Rexburg";
  }

  display5dayForcast(data) {
    //console.log("Default city is - " + this.defaultCity);
    console.log(data.list[6].dt_txt);
    const date1 = new Date(data.list[0].dt_txt).toLocaleDateString('en-US');
    const date2 = new Date(data.list[6].dt_txt).toLocaleDateString('en-US');
    const date3 = new Date(data.list[14].dt_txt).toLocaleDateString('en-US');
    const formattedDate1 = date1.split('/').join('-');
    const formattedDate2 = date2.split('/').join('-');
    const formattedDate3 = date3.split('/').join('-');
    console.log(formattedDate1);
    console.log(formattedDate2);
    console.log(formattedDate3);

    this.display.innerHTML = `
        
        <div>
            <div>
                <h3>${data.city.name}, ${data.city.country}</h3>
                <h4>${formattedDate1}</h4><h4>${formattedDate2}</h4><h4>${formattedDate3}</h4>
                
                
            </div>
        </div>
        
        `;
  }
}


const fetchClassObj = new Fetch();
//ui is now displayClass
const displayClassObj = new Display();
const displayForecastObj = new Display5days();

const search = document.getElementById("searchCity");
const button1 = document.getElementById("submit");
const button2 = document.getElementById("forecast");

button1.addEventListener("click", () => {
  const currentVal = search.value;

  fetchClassObj.getCurrentCity(currentVal).then((data) => {
    displayClassObj.displayData(data);
    //ui.saveToLocalStorage(data);
  });
});

search.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
    const currentVal = search.value;

    fetchClassObj.getCurrentCity(currentVal).then((data) => {
      displayClassObj.displayData(data);
  });
};
});

button2.addEventListener("click", () => {
  const currentVal = search.value;

  fetchClassObj.getCurrentCity(currentVal).then((data) => {
    displayForecastObj.display5dayForcast(data);
    //ui.saveToLocalStorage(data);
  });
});
//event listener for local storage and to clear
/*
window.addEventListener("DOMContentLoaded", () => {
  //clearUI();
  //clearLS();
  
  //const dataSaved = ui.getFromLocalStorage();
  //ui.displayData(dataSaved);
});
*/


