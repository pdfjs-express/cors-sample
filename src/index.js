import WebViewer from '@pdftron/pdfjs-express';

const viewerDiv = document.getElementById('viewer')

/**
 * Load WebViewer as normal, except our "path" and "config" params point to our (fake) CDN.
 * The contents of the config file can be found at "cdn/files/config.js"
 * 
 * Note that this function will no longer resolve with an instance object since we are loading
 * our assets from a different origin
 */
WebViewer({
  path: 'http://localhost:3001/express',
  config: 'http://localhost:3001/config.js'
}, viewerDiv).then(instance => {
  console.log('This is never called')
})

/**
 * When the button in our UI is clicked, we post a message to our config file
 * telling it to load a document.
 * 
 * We must do it this way because we cannot access an functions or DOM elements
 * inside the iframe window because it is loaded on a different origin. This is a browser security restriction.
 * 
 * Take a look at "cdn/files/config.js" to see how we handle the message
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
 */
document.getElementById('load-doc').onclick = () => {
  const iframe = document.getElementById('webviewer-1')
  iframe.contentWindow.postMessage({ type: 'loadDocument' }, "http://localhost:3001")
}

/**
 * Same idea as above, except this time we pass a custom parameter with the event
 * 
 * Take a look at "cdn/files/config.js" to see how we handle the message
 */
document.getElementById('set-theme').onchange = (e) => {
  const iframe = document.getElementById('webviewer-1')
  iframe.contentWindow.postMessage({ type: 'setTheme', theme: e.target.value }, "http://localhost:3001")
}