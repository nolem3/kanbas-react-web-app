import React from 'react';
import logo from './logo.svg';
import './App.css';
import Labs from './Labs'
import Kanbas from './Kanbas'
import HelloWorld from './Labs/a3/HelloWorld';
import { HashRouter } from 'react-router-dom';
import {Routes, Route, Navigate} from "react-router";

function App() {
    return (
        <HashRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/Labs/" />}></Route>
                    <Route path="/Labs/*" element={<Labs />}></Route>
                    <Route path="/Kanbas/*" element={<Kanbas />}></Route>
                    <Route path="/hello" element={<HelloWorld />}></Route>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
