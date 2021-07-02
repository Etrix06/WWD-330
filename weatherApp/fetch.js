class Fetch {
  async getCurrent(input) {
    const myKey = "b289d6d45af893f5469e8c958107b6d7";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
}