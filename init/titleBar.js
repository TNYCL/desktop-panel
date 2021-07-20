const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;

function minimizeApp() {
    ipc.send('minimize');
}

function closeApp() {
    ipc.send('close');
}

function maximizeApp() {
    ipc.send('maximize');
}
