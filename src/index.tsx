import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  {App}  from './App';
import * as serviceWorker from './serviceWorker';
import { threadId } from 'worker_threads';


/*ReactDOM.render(
  <React.StrictMode>
    <App ok="Hello World"/>
  </React.StrictMode>,
  document.getElementById('root')
);*/

/*class Clock extends React.Component<{}, {"time": Date}>{

  constructor(props: {"time": Date}){
    super(props);
    this.state = {time: new Date()}
  }
  render() {
    return (
      <div>
        <p>hello, it is {this.state.time.toLocaleTimeString()}</p>
      </div>
    )
  }

}

ReactDOM.render(
  <Clock/>,
  document.getElementById("root")

);*/



/*class Clock extends React.Component<{},
{"time": Date}
>{

  constructor(props: {}){

    super(props);
    this.state = {"time": new Date()};
  }
  
  private timerId: any;

  
  componentDidMount(){
    this.timerId = setInterval(()=>{
      this.tick()
    },1000)

  }

  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  tick(){
    this.setState(
      {"time": new Date()}
    )

  }

  render() {
    return (
      <p> 
      it is {this.state.time.toLocaleTimeString()}
      </p>
    )
  }

}

class Greetings extends React.Component<{"name": string}>{

  render(){
    return (

      <div>
        <p>Hello, {this.props.name} !</p>
        <Clock />
      </div>
      

    )
  }

}


ReactDOM.render(
  <Greetings name="william" />,
  document.getElementById("root")
)*/

/*
function myGeneric<T>(x: T): { p: T } {
  return { "p": x };
}

const y = myGeneric<number>(33);
const yy = myGeneric<string>("oui")
*/













ReactDOM.render(
  (<App />),
  document.getElementById("root")
)




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
