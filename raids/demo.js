const { runOne } = require("../pipeline")
const { getPage } = require("../pages")

const pageName = "demo-fake"

const run = async () => {
  try {
    const page = getPage(pageName)
    return await runOne(page)
  } catch (err) {
    console.log(`error scraping ${p.name}: ${err}`)
  }
}

async function handleSuccess(run) {
  try {
    console.log(JSON.stringify(run, null, 2))
  } catch (error) {
    console.log(error)
  }
}

function handleError(err) {
  console.log(err)
}

module.exports = {
  run,
  handleError,
  handleSuccess,
}
