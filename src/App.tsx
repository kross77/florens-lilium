import { useState } from 'react';
import './App.css';
import { create } from './reselect-lib';
import AppView from './app';

const functions = {
  add: (a: number, b: number) => a + b,
  substract: (a: number, b: number) => a - b,
};

const types = {
  add: ['number', 'number'],
  substract: ['number', 'number'],
};

function App() {
  const [count, setCount] = useState(0);
  const s = create([(a: any) => a, (a: any) => a + 1]);
  const r = s(count);
  return <AppView />;
}

export default App;
