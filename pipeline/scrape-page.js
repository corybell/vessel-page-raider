const puppeteer = require("puppeteer")

const evaluate = async (target) => {
  const getProperty = (obj, path) => {
    try {
      return path.reduce((acc, curr) => acc[curr], obj)
    } catch (e) {}
    return ""
  }

  const items = [...document.querySelectorAll(target.selector)]
  return items.map((item) => {
    return target.fields.reduce((row, field) => {
      row[field.name] = getProperty(item, field.path)
      return row
    }, {})
  })
}

const scrapePage = async (target) => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })

  const page = await browser.newPage()
  await page.goto(target.url, { waitUntil: "networkidle0" })

  const values = await page.evaluate(evaluate, target)
  browser.close()
  return values
}

module.exports = scrapePage
