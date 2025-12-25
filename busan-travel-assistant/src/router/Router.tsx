import { Route, Routes } from 'react-router';
import { routes } from './routes';

export function Router() {
  return (
    <>
      <Routes>
        {Object.values(routes).map((route) => (
          <Route
            key={route.path}
            path={route.path}
            Component={route.component}
          />
        ))}
      </Routes>
    </>
  );
}
