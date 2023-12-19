import "./current-weather.css";

export default function CurrentWeather({data}) {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img alt="weather" src={`icons/${data.weather[0].icon}.png`} className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
            <div className="parameters-row">
                <span className="parameters-label">Details</span>
            </div>
            <div className="parameters-row">
                <span className="parameters-label">Feels like</span>
                <span className="parameters-value">{Math.round(data.main.feels_like)}°C</span>
            </div>
            <div className="parameters-row">
                <span className="parameters-label">Wind</span>
                <span className="parameters-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameters-row">
                <span className="parameters-label">Humidity</span>
                <span className="parameters-value">{data.main.humidity}%</span>
            </div>
            <div className="parameters-row">
                <span className="parameters-label">Pressure</span>
                <span className="parameters-value">{data.main.pressure}Pa</span>
            </div>
        </div>
      </div>
    </div>
  );
}
