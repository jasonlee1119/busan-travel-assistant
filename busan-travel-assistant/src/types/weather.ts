export interface CurrentWeather {
  updateTime: Date;
  temperature: number;
  weatherCode: number;
  isDay: number;
  apparentTemperature: number;
  relativeHumidity: number;
  rain: number;
  showers: number;
}