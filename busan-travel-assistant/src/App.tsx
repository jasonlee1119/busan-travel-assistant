import './App.css';
import { BrowserRouter } from 'react-router';
import { Router } from './router/Router';
import { TopBar } from './components/topbar/TopBar';

export default function App() {
  return (
    <>
      <BrowserRouter basename="/busan-travel-assistant">
        <TopBar />
        <div className="mt-4 ml-4 mr-4">
          <Router />
        </div>
      </BrowserRouter>
    </>
  );
}

