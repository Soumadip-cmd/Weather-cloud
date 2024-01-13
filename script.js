async function weather() {
  let pos=document.getElementById('box1').value;
  var date=new Date();
  const dayNames = ["Sunday", "Monday", "Tuesday" ,"Wednesday","Thursday","Friday","Saturday"];
  const url =
    `http://api.weatherapi.com/v1/current.json?key=45bf23bd21564ca8912202617241201&q=${pos}&aqi=no`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.current.temp_c);
    document.getElementById('temp').innerHTML=data.current.temp_c+"℃"
    document.getElementById('type1').innerHTML="Wind: "+data.current.wind_kph+"km/h23"
    document.getElementById('type2').innerHTML="Pressure: "+data.current.pressure_mb;
    document.getElementById('type3').innerHTML="Feels Like: "+data.current.feelslike_c+"℃"
    document.getElementById('day').innerHTML=","+dayNames[date.getDay()];
    document.getElementById('img').innerHTML=`<img src="${data.current.condition.icon}" alt="..." id="img">`
    document.getElementById('quality').innerHTML=data.current.condition.text;
  } catch (error) {
    console.error(error);
  }
}
// weather();
