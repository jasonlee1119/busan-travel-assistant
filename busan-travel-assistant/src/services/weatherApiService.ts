import { fetchWeatherApi } from "openmeteo";
import type { CurrentWeather } from "../types/weather";

const params = {
	latitude: 35.1017,
	longitude: 129.03,
	current: ["temperature_2m", "weather_code", "is_day", "apparent_temperature", "relative_humidity_2m", "rain", "showers"],
};
const url = "https://api.open-meteo.com/v1/forecast";


export const getBusanWeatherAsync = async () => {
  const responses = await fetchWeatherApi(url, params);
  const response = responses[0];

  const utcOffsetSeconds = response.utcOffsetSeconds();

  const current = response.current()!;
  const weatherData = {
    current: {
      updateTime: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature: current.variables(0)!.value(),
      weatherCode: current.variables(1)!.value(),
      isDay: current.variables(2)!.value(),
      apparentTemperature: current.variables(3)!.value(),
      relativeHumidity: current.variables(4)!.value(),
      rain: current.variables(5)!.value(),
      showers: current.variables(6)!.value(),
    } as CurrentWeather,
  };

  return weatherData;
}
