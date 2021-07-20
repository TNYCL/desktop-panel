const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu, ipcMain} = electron;
const remote = electron.remote;

let page;

app.on('ready', () => {
    createWindow('main');
    Menu.setApplicationMenu(null);
});

function createWindow(html) {
    page = new BrowserWindow({
        width: 1200,
        height: 800,
        minHeight: 800,
        minWidth: 1200,
        titleBarStyle: 'customButtonsOnHover',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true
        },
        frame: false
    });
    page.webContents.openDevTools();
    page.setTitle('TNYCL');
    page.setIcon(__dirname + '/assets/attachments/title_icon.png');
    page.loadFile(html + '.html');
    ipcMain.on('minimize', () => {
        page.minimize();
    });
    ipcMain.on('maximize', () => {
        page.maximize();
    });
    ipcMain.on('close', () => {
        page.close();
    });
}