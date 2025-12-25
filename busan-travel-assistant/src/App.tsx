import { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router';
import { Router } from './router/Router';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter basename="/busan-travel-assistant">
        <div className="mt-4 ml-4 mr-4">
          <Router />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

