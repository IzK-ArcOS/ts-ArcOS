const {app, BrowserWindow} = require("electron");
let win: any;

app.on("ready", () => {
    win = new BrowserWindow();
});