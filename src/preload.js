const { contextBridge, ipcRenderer } = require("electron");

const {
  checkProfile,
  readFolder,
  _config,
  createProfile,
  readProfiles,
  runProfile,
} = require("./back-end/utilities");

contextBridge.exposeInMainWorld("myApi", {
  ipc: ipcRenderer,
  isProfile: checkProfile,
  readFolder: readFolder,
  _config: _config,
  createProfile: createProfile,
  readProfiles: readProfiles,
  runProfile: runProfile,
});
