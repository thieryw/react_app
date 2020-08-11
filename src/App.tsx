import React from 'react';
import './App.css';
import {Toggle1} from "./components/Toggle";
import {Greetings} from "./components/Greetings"; 
import {Messages} from "./components/Messages";

import * as Dummy from "./components/Dummy";

import {Calculator} from "./components/Temperature";

import {Money} from "./components/Money";

import { TodoList } from "./components/TodoList";

import * as hooks from "./components/Hooks";

export const App: React.FunctionComponent = () =>{
  return(
      <div className="App">

        <TodoList/>
    
       
      </div>
  )
}



