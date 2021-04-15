const { runOne } = require("../pipeline")
const { getPage } = require("../pages")

const raid = async (pageNames) => {
  return await Promise.all(
    pageNames.map(async (pageName) => {
      try {
        const page = getPage(pageName)
        return await runOne(page)
      } catch (err) {
        console.log(`error scraping ${pageName}: ${err}`)
      }
    })
  )
}

module.exports = {
  raid,
}
