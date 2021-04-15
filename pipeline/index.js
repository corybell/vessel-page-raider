const scrapePage = require('./scrape-page')

function timestamp () {
  const ts = new Date().toISOString()
  return ts
}

function _filter (data) {
  if (!data || !data.length) {
    return []
  }
  return data
}

async function runOne (page) {
  try {
    const ts = timestamp()
    const { name, url, scrape, filter } = page
    const scraped = scrape ? await scrape() : await scrapePage(page)
    const results = filter ? filter(scraped) : _filter(scraped)
    return {
      ts,
      url,
      name,
      results,
    }
  } catch (err) {
    console.log(err)
    return { }
  }
}

const runMany = async (pages) => {
  return await Promise.all(pages.map(async p => {
    return await runOne(p)
  }))
}

module.exports = {
  runOne,
  runMany,
}
