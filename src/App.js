import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" />
      </div>
    </BrowserRouter>
  );
}

export default App;


/*
  Steps to remember for package.json/pushing to github:
    - npm install gh-pages
    - git remote add origin repo_url
    - add "homepage": url
    - add "predeploy": "npm run build" => in scripts
    - add "deploy": "gh-pages - build" => in scritps   
  */