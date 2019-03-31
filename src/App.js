/*

How to use worker with CRA without ejecting

*/
  

import React, { Component } from 'react';
import './App.css';

import WebWorker from './WebWorker'
import MyWorker from './MyWorker'


console.log('Init worker...')

// Worker init
const workerInstance = new WebWorker(MyWorker) 


// Listening for messages from worker
workerInstance.addEventListener("message", e => {

  console.log('[MAIN] MSG FROM WORKER: ', e.data)


}, false)


workerInstance.postMessage("Hi, worker! I'm main thread!")


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Enable DevTools/console to see messages!
          </p>
        </header>
      </div>
    );
  }
}

export default App;
