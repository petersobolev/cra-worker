
export default function MyWorker(args) {

// we can't use relative urls within blob! 
// use importScripts("http://localhost/smth_to_include.js")

    this.onmessage = e => {

        console.log('[WORKER] MSG FROM MAIN THREAD:',e.data)

       	postMessage("Hi, main thread, I'm worker!");

    }
}
