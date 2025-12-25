import { useEffect, useState } from 'react';
import { getBusanWeatherAsync } from '../services/weatherApiService';
import { WeatherWidget } from '../components/WeatherWidget';
import type { CurrentWeather } from '../types/weather';
import { Box } from '@mui/material';

export function Home() {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const data = await getBusanWeatherAsync();
        setWeather(data.current);
      } catch (err: any) {
        setError(err?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.default',
          color: 'text.primary',
          minHeight: '100vh',
          padding: 2,
        }}
      >
        <WeatherWidget weather={weather} loading={loading} error={error} />
      </Box>
    </>
  );
}
