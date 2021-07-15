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

class Display {
  constructor() {
    this.display = document.getElementById("display");
  }

  displayData(data) {
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

}

class Display5days {
  constructor() {
    this.display = document.getElementById("display");
  }

  display5dayForcast(data) {
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
                <h4 class="inline">${formattedDate1}</h4>
                <h4 class="inline">${formattedDate2}</h4>
                <h4 class="inline">${formattedDate3}</h4>
                <br>
                <h5 class="inline">High: ${data.list[0].main.temp_max}</h5>
                <h5 class="inline">High: ${data.list[6].main.temp_max}</h5>
                <h5 class="inline">High: ${data.list[14].main.temp_max}</h5>
                <br>
                <h5 class="inline">Low: ${data.list[0].main.temp_min} </h5>
                <h5 class="inline">Low: ${data.list[8].main.temp_min}  </h5>
                <h5 class="inline">Low: ${data.list[16].main.temp_min}</h5>
                
                
            </div>
            
        </div>
        
        `;
  }
}


const fetchClassObj = new Fetch();
const displayClassObj = new Display();
const displayForecastObj = new Display5days();

const search = document.getElementById("searchCity");
const button1 = document.getElementById("submit");
const button2 = document.getElementById("forecast");

button1.addEventListener("click", () => {
  const currentVal = search.value;

  fetchClassObj.getCurrentCity(currentVal).then((data) => {
    displayClassObj.displayData(data);
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
  });
});



