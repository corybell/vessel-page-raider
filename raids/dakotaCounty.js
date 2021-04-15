const {
  handleError,
  handleSuccess,
} = require("../result-handlers/dakotaCounty")
const { runOne, runMany } = require("../pipeline")
const { getPage } = require("../pages")

const searchPageName = "clinic-search-live"
const detailPageName = "clinic-detail-live"

const run = async () => {
  try {
    const searchPage = getPage(searchPageName)
    const clinicSearch = await runOne(searchPage)
    const response = { clinicSearch }

    const detailPage = getPage(detailPageName)
    const pages = clinicSearch.results.map((t) => {
      return {
        ...t,
        ...detailPage,
      }
    })

    if (pages && pages.length) {
      const clinicDetails = await runMany(pages)
      if (clinicDetails && clinicDetails.length) {
        response.clinicDetails = clinicDetails
      }
    }

    return response
  } catch (err) {
    console.log(`error scraping ${p.name}: ${err}`)
  }
}

module.exports = {
  run,
  handleError,
  handleSuccess,
}
