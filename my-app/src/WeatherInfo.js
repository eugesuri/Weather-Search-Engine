import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="icon-temp-display">
            <span className="weather-icon-today">
              <WeatherIcon code={props.data.icon} size={54} />
            </span>
            <WeatherTemperature celsius={Math.round(props.data.temperature)} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Windspeed: {props.data.windspeed} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
