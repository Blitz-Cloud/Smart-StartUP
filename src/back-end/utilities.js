const process = require("node:child_process");
const path = require("node:path");
const fileSys = require("node:fs/promises");

const readFolder = async function (PATH) {
  const data = await fileSys.readdir(`${PATH}`);
  return data;
};
const check_Config = function () {
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

module.exports = { checkProfile, readFolder };
