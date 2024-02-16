import { RequestQueue, CheerioCrawler } from '../node_modules/@crawlee';

const requestQueue = await RequestQueue.open();

await requestQueue.addRequest({ url: 'https://crawlee.dev' })

const crawler = new CheerioCrawler({
    requestQueue,
    async requestHandler({ $, request }) {
        const title = $('title').text();
        console.log(`the title of "${request.url}" is: ${title}`);
    }
})

await crawler.run();

document.getElementById("btn").addEventListener("click", print());

function print() {
    console.log("cliked!");
}

