const process = require("node:child_process");
const path = require("node:path");

const start = async function () {
  const ps = process.spawn("powershell.exe", [
    `${path.join(__dirname, "ps.ps1")}`,
  ]);
  ps.stdout.on("data", (data) => {
    console.log(data.toString());
  });
  ps.stderr.on("data", (data) => {
    // console.log(data.toString());
  });
};

module.exports = { start };
