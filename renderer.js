// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
console.log('renderer')

// In renderer process (web page).
const { ipcRenderer } = require('electron')
console.log(ipcRenderer.sendSync('speaker-info', 'ping')) // prints "pong"

ipcRenderer.on('success', (event, arg) => {
  console.log(arg) // prints "pong"
})
ipcRenderer.send('speaker-info', 'ping')
