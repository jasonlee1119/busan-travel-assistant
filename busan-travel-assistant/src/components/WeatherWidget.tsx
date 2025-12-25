import { CircularProgress, Paper, Typography } from '@mui/material';
import type { CurrentWeather } from '../types/weather';

export interface WeatherWidgetProps {
  weather: CurrentWeather | null;
  loading: boolean;
  error: string | null;
}

export function WeatherWidget({ weather, loading, error }: WeatherWidgetProps) {
  if (loading && !weather) {
    return (
      <>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <CircularProgress size={32} />
          <Typography variant="body2">Loading weather data...</Typography>
        </Paper>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            Error loading weather data: {error}
          </Typography>
        </Paper>
      </>
    );
  }

  return (
    <>
      <Paper elevation={2} sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="body2">Current Weather in Busan</Typography>
        <Typography variant="body2">
          Temperature: {weather?.temperature}°C
        </Typography>
        <Typography variant="body2">
          Feels like: {weather?.apparentTemperature}°C
        </Typography>
        <Typography variant="body2">
          Humidity: {weather?.relativeHumidity}%
        </Typography>
        <Typography variant="body2">Rain: {weather?.rain}mm</Typography>
        <Typography variant="body2">Showers: {weather?.showers}mm</Typography>
      </Paper>
    </>
  );
}
