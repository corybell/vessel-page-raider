require("dotenv").config()
const cron = require("node-cron")
const { raid } = require("./raiders/demo")
const {
  handleSuccess,
  handleError,
} = require("./result-handlers/consoleLogger")

const { CRON_PATTERN } = process.env
const pageNames = ["demo-fake", "demo-live"]

cron.schedule(CRON_PATTERN, () => {
  raid(pageNames).then(handleSuccess).catch(handleError)
})

console.log("READY...")
