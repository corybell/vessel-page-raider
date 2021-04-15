const config = require("./config.json")

const filter = (data) => {
  if (!data || !data.length) {
    return []
  }
  return data.filter((d) => d.numberAvailable !== "No appointments available")
}

module.exports = {
  ...config,
  filter,
}
