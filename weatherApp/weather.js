class Fetch {
  async getCurrent(input) {
    const myKey = "b289d6d45af893f5469e8c958107b6d7";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}

class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "Rexburg";
  }

  populateUI(data) {
    this.uiContainer.innerHTML = `
        
        <div>
            <div>
                <h3>${data.name}</h3>
                <h4>Highs of ${data.main.temp_max}. <br> Lows of ${data.main.temp_min}</h4>
                <p>Weather conditions are described as: <br><span class="description">${data.weather[0].description}</span></p>
                
            </div>
        </div>
        
        `;
  }

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
  }
}

const ft = new Fetch();
const ui = new UI();

const search = document.getElementById("searchCity");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getCurrent(currentVal).then((data) => {
    ui.populateUI(data);
    ui.saveToLocalStorage(data);
  });
});

//event listener for local storage and to clear

window.addEventListener("DOMContentLoaded", () => {
  clearUI();
  clearLS();
  
  const dataSaved = ui.getFromLocalStorage();
  ui.populateUI(dataSaved);
});



