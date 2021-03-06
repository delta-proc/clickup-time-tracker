'use strict'

import { app, protocol } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import { menubar } from 'menubar'
import { join } from 'path'
import './store'

const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
    { scheme: 'app', privileges: { secure: true, standard: true } }
])

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
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

    if (! process.env.WEBPACK_DEV_SERVER_URL) {
        createProtocol('app')
    }

    const mb = menubar({
        index: process.env.WEBPACK_DEV_SERVER_URL
            ? process.env.WEBPACK_DEV_SERVER_URL
            : 'app://./index.html',
        browserWindow: {
            alwaysOnTop: true,
            minWidth: 360,
            maxWidth: 360,
            webPreferences: {
                nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
            }
        },
        icon: join(__static, '../src/assets/MenubarIcon.png'),
    })

    // Open the menubar window & devtools in development mode
    mb.on('ready', () => {
        if(!isDevelopment) return

        mb.showWindow()
        mb.window.openDevTools()
    })
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
