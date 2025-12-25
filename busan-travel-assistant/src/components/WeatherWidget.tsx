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
        <Typography variant="body2">釜山即時天氣</Typography>
        <Typography variant="body2">
          溫度: {weather?.temperature.toFixed(1)}°C
        </Typography>
        <Typography variant="body2">
          體感溫度: {weather?.apparentTemperature.toFixed(1)}°C
        </Typography>
        <Typography variant="body2">
          濕度: {weather?.relativeHumidity.toFixed(1)}%
        </Typography>
        <Typography variant="body2">Rain: {weather?.rain}mm</Typography>
        <Typography variant="body2">Showers: {weather?.showers}mm</Typography>
      </Paper>
    </>
  );
}
