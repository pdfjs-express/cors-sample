const express = require('express')
const path = require('path')

const app = express();

/**
 * We are using Express (not to be confused with PDF.js Express) to serve static
 * files located in ""./files". This includes both our config file and static PDF.js Express assets.
 * 
 * The static PDF.js Express assets get copied into the file in "scripts/copy.js"
 */
app.use(express.static(path.resolve(__dirname, './files')));

app.listen(3001, () => {
  console.log(`Fake CDN server listening on port 3001`)
});