
/**
 * This script simply copies static assets to our "CDN", and adds our domain
 * name to "configorigin.txt" - see below.
 * 
 * This script is executed when running "yarn start:client"
 */

const fs = require('fs-extra');
const path = require('path')

fs.removeSync(path.resolve(__dirname, '../cdn/files/express'))


/**
 * Copy the static assets from PDF.js Express to our "CDN"
 * In a real world app, you would have a script to move the files to your actual CDN provider.
 */
fs.copySync(
  path.resolve(__dirname, '../node_modules/@pdftron/pdfjs-express/public'),
  path.resolve(__dirname, '../cdn/files/express')
)


/**
 * A requirement of using PDF.js Express Cross origin is that we include the domain name of our app inside "ui/configorigin.txt"
 * This script simply adds the domain of our client to that file
 */
fs.writeFileSync(
  path.resolve(__dirname, '../cdn/files/express/ui/configorigin.txt'),
  `http://localhost:1234`
)