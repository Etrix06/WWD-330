class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "London";
  }
  populateUI(data) {
    this.uiContainer.innerHTML = `
    <h3>${data.name}</h3>
    <h4> High of ${data.main.temp_max}. Low of ${data.main.temp_min}</h4>
    <p>Weather conditions are: ${data.weather[0].description}</p>
    `;
  }

  /*
  clearUI() {
    this.uiContainer.innerHTML = "";
  }
  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }
  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return null;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }
    return this.city;
    }
    clearLS() {
      localStorage.clear();
    }
    */
  }
