const { contextBridge } = require("electron");
const { start } = require("./back-end/utilities");

contextBridge.exposeInMainWorld("myApi", {
  start: start,
  test: "Hello world",
});
