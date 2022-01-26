const process = require("node:child_process");
const path = require("node:path");
const fileSys = require("node:fs/promises");
const { log } = require("node:console");
const { resolve } = require("node:path");
const { rejects } = require("node:assert");

// const start = async function () {
//   const ps = process.spawn("powershell.exe", [
//     `${path.join(__dirname, "ps.ps1")}`,
//   ]);
//   ps.stdout.on("data", (data) => {
//     console.log(data.toString());
//   });
//   ps.stderr.on("data", (data) => {
//     // console.log(data.toString());
//   });
// };
// const runTest = async function () {
//   if (await checkProfile()) {
//     console.log("is");
//   } else {
//     console.log("no");
//   }
// };
// runTest();
// Some legacy code / Testing

const readFolder = async function (PATH) {
  const data = await fileSys.readdir(`${PATH}`);
  return data;
};
const checkProfile = function () {
  return new Promise((resolve, reject) => {
    readFolder(path.join(__dirname, "../_config")).then((data) => {
      if (data.length) {
        resolve();
      } else {
        reject();
      }
    });
  });
};
checkProfile().then((data) => {
  console.log(data);
});

module.exports = { checkProfile, readFolder };
