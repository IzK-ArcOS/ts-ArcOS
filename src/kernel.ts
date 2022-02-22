const { app, BrowserWindow, globalShortcut } = require('electron');

// @ts-ignore
let mainWindow: Electron.BrowserWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: true,
        minWidth: 1000,
        minHeight: 700,
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
        },
        backgroundColor: "#000",
    });

    mainWindow.removeMenu();

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    globalShortcut.register("Alt+Enter", () => {
        if (mainWindow.isFocused()) {
            if (BrowserWindow.getFocusedWindow().fullScreen == true) {
                BrowserWindow.getFocusedWindow().fullScreen = false;
            } else {
                BrowserWindow.getFocusedWindow().fullScreen = true;
            }
        }
    });

    globalShortcut.register("Control+Shift+I", () => {
        if (mainWindow.isFocused()) {
            mainWindow.toggleDevTools();
        }
    });

    globalShortcut.register("Control+Alt+Shift+R", () => {
        if (mainWindow.isFocused()) {
            mainWindow.loadURL(`file://${__dirname}/index.html`);
        }
    });

    globalShortcut.register("Control+R", () => {
        if (mainWindow.isFocused()) {
            mainWindow.webContents.reload();
        }
    });

    mainWindow.on("maximize", () => {
        mainWindow.unmaximize();
        setTimeout(() => {
            mainWindow.fullScreen = true;
        }, 50);
    });
}

if (app) {
    app.whenReady().then(createWindow);

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
}
