const { app, BrowserWindow, ipcRenderer, ipcMain } = require("electron");
const path = require("path");
const fileSys = require("node:fs/promises");
const { _config, readProfiles } = require("./back-end/utilities");
const ejs = require("ejs-electron");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = async () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1440,
    height: 810,
    webPreferences: {
      nodeIntegration: false,
      // NOTE: The preload path needs to be absolute
      preload: `${path.join(__dirname, "preload.js")}`,
    },
    icon: path.join(__dirname, "./front-end/src/.icons/Frame.jpg"),
  });

  _config();
  let profiles;
  await readProfiles().then((data) => {
    profiles = data;
  });

  ejs.data("profiles", profiles);

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "front-end/index.ejs"));

  // Open the DevTools.

  fileSys.readdir(path.join(__dirname, "/"), (err, infos) => {
    console.log(path.join(__dirname, "./src"));
    console.log(infos);
    infos.forEach((info) => {
      if (path.extname(info) == ".env") {
        mainWindow.webContents.openDevTools();
      }
    });
  });
  mainWindow.removeMenu();
  ipcMain.on("reload", async () => {
    await readProfiles().then((data) => {
      ejs.data("profiles", data);
      mainWindow.webContents.reloadIgnoringCache();
    });
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
