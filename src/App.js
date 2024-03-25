import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react"
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";


// 1. 앱이 실행되면 현재 위치 기반의 날씨가 나온다.
// 2. 유저에게 주는 정보: 섭씨, 화씨, 날씨 정보.
// 3. 날씨 밑에 5개의 버튼이 있다. (현재 위치 1, 다른 도시 4)
// 4. 유저는 버튼을 클릭하면 다른 도시의 날씨 정보도 볼 수 있다.
// 5. 버튼을 클릭할 때마다(데이터 로딩시) 로딩 스피너가 보인다.
function App() {

  const [weather, setWeather] = useState(null);
  const cities = ["Toronto", "Calgary", "Montreal", "Quebec"];
  const [city, setCity] = useState("");
  let [loading, setLoading] = useState(true);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("lat", lat, "lon", lon);
      getWeatherInfo(lat, lon);
    })

    const getWeatherInfo = async(lat, lon) => {
      const API_KEY = `3b56745dd240621d3eaad2aac3d8a827`;
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    }
  }

  const getWeatherByCity = async() => {
      const API_KEY = `3b56745dd240621d3eaad2aac3d8a827`;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      //console.log("data?", data);
      setWeather(data);
      setLoading(false);
  }

  useEffect(()=>{
    if(city=="") {
      getCurrentLocation();
    } else {
      getWeatherByCity(); // 상황에 따라 실행하는 함수를 나눠준다. city 정보가 없을 때는 geocode를 받도록 한다.
    }
  }, [city])

  return (
    <div>
      {loading?
      <div className="container">
        <ClipLoader
          color="#FFA500"
          loading={loading}
          size={130}
        />
        </div>:
      <div className="container">
        <div>
          <WeatherBox weather={weather}/>
          <WeatherButton cities={cities} setCity={setCity}/>
          {/* 함수도 props로 받을 수 있다. */}
        </div>
      </div>}
    </div>
  );
}

export default App;
