import { RequestQueue } from '../node_modules/@crawlee';

const requestQueue = await RequestQueue.open();

await requestQueue.addRequest({ url: 'https://crawlee.dev' })

document.getElementById("btn").addEventListener("click", print());

function print() {
    console.log("cliked!");
}

