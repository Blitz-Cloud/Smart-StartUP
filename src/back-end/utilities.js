const process = require("node:child_process");
const path = require("node:path");
const fileSys = require("node:fs/promises");
const { v4: uuidv4 } = require("uuid");
const child_procces = require("node:child_process");

const _config = async function () {
  const data = await fileSys.mkdir(`${path.join(__dirname, "../_config")}`, {
    recursive: true,
  });
};

const readFolder = async function (PATH) {
  const data = await fileSys.readdir(`${PATH}`);
  return data;
};

// This function needs some changes for checking if there are any complementary files
// const check_Config = function () {
//   return new Promise((resolve, reject) => {
//     readFolder(path.join(__dirname, "../_config")).then((data) => {
//       if (data.length) {
//         resolve();
//       } else {
//         reject();
//       }
//     });
//   });
// };

const checkProfile = async function () {
  return new Promise((resolve, reject) => {
    let data;
    readFolder(path.join(__dirname, "../_config")).then((files) => {
      const scripts = files.filter((file) => path.extname(file) === ".json");
      data = scripts.length;
      if (data) {
        return resolve(data);
      } else {
        reject(data);
      }
    });
  });
};

const createProfile = async function (name, pathList) {
  const fileName = uuidv4();
  const routes = [];
  pathList.forEach((path) => {
    routes.unshift(`& '${path}'`);
  });
  console.log(routes);
  const jsonBody = {
    name: `${name}`,
    path: routes,
  };
  fileSys.writeFile(
    `${path.join(__dirname, "../_config")}/${fileName}.json`,
    JSON.stringify(jsonBody),
    { flag: "ax" }
  );
};

// This func is gonna return an array containing objects with all data for each profile
const readProfiles = function () {
  return new Promise(async (resolve, reject) => {
    const route = path.join(__dirname, "../_config");
    const files = await fileSys.readdir(route);
    const contents = [];
    for (const file of files) {
      data = JSON.parse(
        await (await fileSys.readFile(`${route}/${file}`)).toString()
      );
      contents.push(data);
    }
    return resolve(contents);
  });
};

const runProfile = async function (paths) {
  console.log(paths);
  paths.forEach((path) => {
    console.log(path);
    child_procces.execFile("powershell", [`& '${path}'`]);
  });
};

module.exports = {
  checkProfile,
  readFolder,
  _config,
  createProfile,
  readProfiles,
  runProfile,
};
