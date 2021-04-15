const config = require("./config.json")

const filter = (data) => {
  if (!data || !data.length) {
    return []
  }
  return data.filter((d) => Boolean(d.url))
}

module.exports = {
  ...config,
  filter,
}
