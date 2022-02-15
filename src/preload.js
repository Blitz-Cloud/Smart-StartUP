const { contextBridge } = require("electron");
const { checkProfile } = require("./back-end/utilities");
const path = require("path");

contextBridge.exposeInMainWorld("myApi", {
  isProfile: checkProfile,
});
