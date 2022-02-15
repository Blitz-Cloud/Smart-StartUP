const { contextBridge } = require("electron");
const { checkProfile, check_Config } = require("./back-end/utilities");
const path = require("path");

contextBridge.exposeInMainWorld("myApi", {
  isProfile: checkProfile,
});
