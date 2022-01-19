import "./App.css";
import CitySearch from "./Components/CitySearch";
import WeatherCard from "./Components/WeatherCard";
import WeatherProvider from "./Components/Context/WeatherProvider";
import Bg1 from "./img/bg-1.jpg";
import Bg2 from "./img/bg-2.jpg";
import Bg3 from "./img/bg-3.jpg";
import Bg4 from "./img/bg-4.jpg";
import Bg5 from "./img/bg-5.jpg";

const App = () => {
  const bgAdrress = [Bg1, Bg2, Bg3, Bg4, Bg5];

  const background = bgAdrress[Math.round(Math.random() * 4)];
  console.log(background);

  return (
    <WeatherProvider>
      <div className="body" style={{ backgroundImage: `url(${background})` }}>
        <h1 className="title">WEATHER</h1>
        <div className="glass-card">
          <CitySearch />
          <WeatherCard />
        </div>
        <div className="title">
          create by :
          <a href="https://github.com/aminmast/" target="_blank">
            aminmast
          </a>
        </div>
      </div>
    </WeatherProvider>
  );
};

export default App;
