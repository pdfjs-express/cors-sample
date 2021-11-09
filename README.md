# PDF.js Express CORS Sample

A sample showing how to load and use PDF.js Express cross origin.

This is useful for situations where you want to load PDF.js Express via CDN.

## Quick start

To run the sample, follow these steps:

1) Run `yarn` to install dependencies
2) Start the fake CDN by running `yarn start:cdn`
3) In another terminal window, start the client by running `yarn start:client`

The client can be accessed at `http://localhost:1234`.

## Project structure

### Client

Client side code can be found in `src/index.js`. You can see in this file that we are loading PDF.js Express assets and our [config file](https://pdfjs.express/documentation/learn-more/advanced/config-files) from the CDN - which is on another domain.

### Fake CDN

For sake of this sample, we set up a fake CDN that will run locally on port 3001. The code for the CDN can be found in `./cdn`. It is just a simple Express server that serves static assets.

Static assets are copied from `node_modules` into our fake CDN in `scripts/copy.js`, which is run when starting the client.

## Points of interest

- `scripts/copy.js` The script that prepares and copies our static assets to our CDN. This is executed when running `yarn start:client`

- `cdn/files/config.js` This is our [config file](https://pdfjs.express/documentation/learn-more/advanced/config-files) that we use to call PDF.js Express APIs.

- `src/index.js` This is where we tell PDF.js Express to load its static assets from our fake CDN
