const path = require("path");

const magic = (...segments) => {
  return path.join(...segments);
};

module.exports = { magic };
