const { readdirSync } = require("fs")

const blacklist = ["index.js"]

const pageMap = {}

const getPage = (pageName) => pageMap[pageName]

const init = () => {
  const rawFiles = readdirSync(__dirname)
  const filteredFiles = rawFiles.filter((f) => !f || !blacklist.includes(f))

  for (let i = 0; i < filteredFiles.length; i++) {
    const fileName = filteredFiles[i]
    pageMap[fileName] = require(`./${fileName}`)
  }
}

init()

module.exports = {
  getPage,
}
