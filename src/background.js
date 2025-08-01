'use strict'

import { app, protocol, BrowserWindow} from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import setIPCChannels from './setIPCChannels'
const SP = require('serialport')
const SerialPort = SP.SerialPort
const isDevelopment = process.env.NODE_ENV !== 'production'
const remoteMain = require('@electron/remote/main');   // 引入
remoteMain.initialize();    
const path = require('path')

const { ipcMain } = require('electron');
const Store = require('electron-store');
const store = new Store();

ipcMain.handle('store-get', (_e, key) => store.get(key));
ipcMain.handle('store-set', (_e, key, value) => store.set(key, value));
ipcMain.handle('get-serial-ports', async () => {
  const ports = await SerialPort.list();
  return ports.map(p => ({
    value: p.path,
    label: p.path
  }));
});

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // reload: path.join(__dirname, 'preload.js'), // ✅ 正确
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      // nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      nodeIntegration: true, // 允许渲染进程使用 Node
      // contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
      contextIsolation: false, // 必须关掉，否则 nodeIntegration=true 也不生效
      enableRemoteModule: true
    }
  })

  // 对当前窗口的 webContents 启用 remote
  remoteMain.enable(win.webContents);

  setIPCChannels(win)

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
