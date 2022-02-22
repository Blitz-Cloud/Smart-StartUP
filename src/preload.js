const { contextBridge } = require("electron");

const {
  checkProfile,
  readFolder,
  _config,
  createProfile,
  readProfiles,
  runProfile,
} = require("./back-end/utilities");

contextBridge.exposeInMainWorld("myApi", {
  isProfile: checkProfile,
  readFolder: readFolder,
  _config: _config,
  createProfile: createProfile,
  readProfiles: readProfiles,
  runProfile: runProfile,
});
