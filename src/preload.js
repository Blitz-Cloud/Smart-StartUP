const { contextBridge } = require("electron");
const { start, checkProfile } = require("./back-end/utilities");
const path = require("path");
const { globalAgent } = require("http");

contextBridge.exposeInMainWorld("myApi", {
  isProfile: checkProfile,
});
