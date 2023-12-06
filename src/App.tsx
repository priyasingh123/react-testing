import React from 'react';
import logo from './logo.svg';
import './App.css';
import Solution from './components/Solution'
import Application from './components/Application';
import Skills from './components/Skills';
import Counter from './components/Counter'
import { AppProviders } from './components/AppProviders';
import { MuiMode } from './components/mui/mui-mode';


function App() {
  return (
    <AppProviders>
    <div className="App">
      <MuiMode/>
      Learn React
      <Counter/>
    </div>
    </AppProviders>
  );
}

export default App;
