import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  );
}

export default App;