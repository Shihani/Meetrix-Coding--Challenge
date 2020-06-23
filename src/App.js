import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import task1  from './components/task1';
function App() {
  return (
    
      <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={task1} exact/>
           </Switch>
        </div> 
      </BrowserRouter>
    
  );
}

export default App;
