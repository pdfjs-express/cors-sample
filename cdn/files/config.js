/**
 * Here is the config file we are loading from the client.
 * In this file we have access to the normal WebViewer instance as a global variable.
 */

console.log('Config file loaded');

/**
 * If you need to call Express APIs immediately, make sure to call them
 * in the `viewerLoaded` event, or else the global "instance" variable may not be defined.
 */
window.addEventListener('viewerLoaded', () => {
  console.log('Viewer loaded');

  instance.UI.loadDocument('https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf')
})

/**
 * Here we are listening to messages from the parent window.
 * Take a look in "src/index.js" for more information
 */
window.addEventListener('message', (event) => {

  console.log(`Received ${event.data.type} event from the parent window`)

  if(event.data.type === 'loadDocument') {
    instance.UI.loadDocument('https://pdftron.s3.amazonaws.com/downloads/pl/form.pdf')
  }

  if(event.data.type === 'setTheme') {
    instance.UI.setTheme(event.data.theme)
  }
})
